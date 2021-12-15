import Rect, { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineCheckCircle, AiFillDiff } from "react-icons/ai";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import {
  Container,
  FormButton,
  FormInput,
  FormP,
  FormWrapper,
  HeaderInputs,
  NameCompany,
  Table,
  Wrapper,
} from "./styles";
import { Header } from "../../components/Header";

import DataTable from "react-data-table-component";
import { DatePicker } from "react-rainbow-components";
import { FilterComponent } from "../../components/FilterComponent";

//import { Loader } from "../../components/Loader";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";
import { InputProps, SelectProps } from "../HomeAdmin";
import api from "../../services/api";
import { LoadingFile } from "../../components/LoadingFile";
import { borderColor } from "@material-ui/system";

export function HomeFinanceiro() {
  const [error, setError] = useState(false);
  const [isGet, setIsGet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState();
  const [fileName, setFileName] = useState("");
  const [classNameForm, setClassNameForm] = useState<string>("header");
  const [classNameP, setClassNameP] = useState<string>("header");
  const [columns, setColumns] = useState<any>([]);
  const [data, setData] = useState<any[]>([]);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const [headerDate, setHeaderDate] = useState<string>();
  const [headerDescrition, setHeaderDescription] = useState<string>();
  const [headerAdministradora, setHeaderAdministradora] = useState<string>();

  function ChangeSelectedAdministradora(event: SelectProps) {
    const text = event.target.value;
    setHeaderAdministradora(text);
  }
  function ChangeTextDescription(event: InputProps) {
    const text = event.target.value;
    setHeaderDescription(text.toUpperCase());
  }
  function ChangeTextDate(event: InputProps) {
    const textAux = event.target.value;
    setHeaderDate(textAux);
  }

  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, []);

  // handle file upload
  const handleFileUpload = (file: any) => {
    const reader = new FileReader();
    reader.onload = (evt: any) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws);
      processData(data);
    };
    reader.readAsBinaryString(file);
  };

  const onDrop = useCallback(
    (files) => {
      setError(false);
      setFileName(files[0].name);
      setClassNameForm("complete");
      setClassNameP("completeP");
      handleFileUpload(files[0]);
    },
    [handleFileUpload]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // processando CSV data
  const processData = (dataString: string) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0]
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s/g, "")
      .split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length == headers.length) {
        const obj: any = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j] == "nsu/cv") {
            headers[j] = "numerodocv";
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remover linhas em branco
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    const columns = headers.map((c) => {
      if (c.trim().length == 0) {
        setError(true);
        alert(
          "Verifique se o nome das colunas foram preenchidos corretamente"
        );
      }

      if (c == "nsu/cv") {       
        const obj = {
          name: "numerodocv",
          selector: "numerodocv",
          sortable: true,
        };
        return obj;
      } 
      const obj = {
        name: c,
        selector: c
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s/g, ""),
        sortable: true,
      };
      return obj;
    });
    setData(list);

    setColumns(columns);
  };  

  const filteredItems = data.filter(
    (item) =>
      item.numerodocv &&
      item.numerodocv.toLowerCase().includes(filterText.toLowerCase())
  );
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };
  async function UploadHeader() {
    try {
      const response = await api.post(
        `/borderocartoes?financeira=${headerAdministradora}&datavencimento=${headerDate}&identificaoextrato=${headerDescrition}&processado=0`
      );
      const id = response.data.data.id;
      return id;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  async function HandleClickUpload() {
    if (error) {
      alert("Upload negado! Existem valores nulos na tabela, favor verificar.");
    } else {
      if (headerAdministradora && headerDate && headerDescrition) {
        if (headerAdministradora=='GET') {
          setLoading(true);
          const id = await UploadHeader();
          for (const row of data) {
            try {
              const response = await api.post(
                `/borderocartoesitem?borderocartoes_id=${id}&produto=${
                  row.produto
                }&numerocv=${row.numerodocv}&estabelecimento=${
                  row.codigoec
                }&parcela=${row.parcela}&parcelas=${
                  row.totaldeparcelas
                }&valororiginal=${Number(
                  row.valorbruto.replace(/[^0-9.-]+/g, "")
                )}&valordesconto=${Number(
                  row.descontos.replace(/[^0-9.-]+/g, "")
                )}&valorliquido=${Number(
                  row.liquido.replace(/[^0-9.-]+/g, "")
                )}`
              );
            } catch (error) {
              alert("Erro ao fazer Upload");
              setLoading(false);
              setData([]);
              throw "exit";
            }
          }
        } //IS REDE
        if(headerAdministradora=='REDE') {
          setLoading(true);
          const id = await UploadHeader();
          for (const row of data) {
            try {
              const response = await api.post(
                `/borderocartoesitem?borderocartoes_id=${id}&produto=${
                  row.modalidade
                }&numerocv=${row.numerodocv}&estabelecimento=${
                  row.estabelecimento
                }&parcela=${row.parcela}&parcelas=${
                  row.numerodeparcelas
                }&valororiginal=${Number(
                  row.valorbrutodaparcelaoriginal.replace(/[^0-9.-]+/g, "")
                )}&valordesconto=${Number(
                  row.valormdrdescontado.replace(/[^0-9.-]+/g, "")
                )}&valorliquido=${Number(
                  row.valorliquidodaparcela.replace(/[^0-9.-]+/g, "")
                )}`
              );
            } catch (error) {
              alert("Erro ao fazer Upload");
              setLoading(false);
              setData([]);
              throw "exit";
            }
          }
        }
        alert("Upload feito com sucesso");
        setData([]);
      } else {
        alert("Preencha todos os campos");
      }
      setLoading(false);
      setHeaderAdministradora('');
      setHeaderDate('');
      setHeaderDescription('');
    }
  }

  return (
    <>
    {loading&&(<LoadingFile></LoadingFile>)}
      <Container style={{ display: loading ? "none" : "flex" }}>
        <Header></Header>
        <Wrapper>
          <NameCompany>Header</NameCompany>
          <HeaderInputs>
            <select
              value={headerAdministradora}
              className="selectAdministradora"
              onChange={ChangeSelectedAdministradora}
            >
              <option value=""></option>
              <option value="GET">GET</option>
              <option value="REDE">REDE</option>
            </select>
            <input
              value={headerDescrition}
              onChange={ChangeTextDescription}
              style={{ width: 300 }}
              placeholder="Header name"
              className="headerInput"
            ></input>
            <input
              type="date"
              value={headerDate}
              onChange={ChangeTextDate}
              className="headerInput"
            ></input>
          </HeaderInputs>
          <FormWrapper
            className={classNameForm}
            {...getRootProps()}
            action="upload.php"
            method="POST"
          >
            <FormInput {...getInputProps()} type="file" />
            {data.length == 0 ? (
              <div className="wrapper">
                <AiFillDiff color={'white'} size={70} style={{marginTop:20}}/>
                <FormP>
                  Arraste o arquivo CSV para essa área ou click nela.
                </FormP>
              </div>
            ) : (
              <div className="wrapper">
                <AiOutlineCheckCircle color="#23f350" size={70} style={{marginTop:20}} />
                <FormP
                  className={classNameP}
                >{`Arquivo ${fileName} carregado com sucesso!!`}</FormP>
              </div>
            )}
          </FormWrapper>
          {data.length > 0 && (
            <>
              <FilterComponent
                onFilter={(e: any) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
              />
              <span>
                {error
                  ? "Existem valores nulo na tabela, favor verificar!"
                  : ""}
              </span>
              <Table>
                <p className="titulo">Tabela de {fileName}</p>
                <DataTable
                  highlightOnHover
                  columns={columns}
                  data={filteredItems}
                  paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                  subHeader
                  style={{backgroundColor:"transparent", color:'white'}}
                  persistTableHead
                />
              </Table>
              <FormButton
                style={{
                  background: "transparent",
                  borderWidth:2,
                  borderStyle:"solid",
                  borderColor:error ? "#fa0000" :"white",
                  color:error ? "#fa0000" :'white'
                }}
                onClick={HandleClickUpload}
                type="submit"
              >
                {error ? "CSV inválido" : "Fazer upload"}
              </FormButton>
            </>
          )}
        </Wrapper>
        <p className="criador">By Christopher Marim</p>
      </Container>
    </>
  );
}

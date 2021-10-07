import Rect, { useCallback, useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiFillDiff,
} from "react-icons/ai";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import {
  Container,
  FormButton,
  FormInput,
  FormP,
  FormWrapper,
  NameCompany,
  Table,
  Wrapper,
} from "./styles";
import { Header } from "../../components/Header";

import DataTable from "react-data-table-component";
import { FilterComponent } from "../../components/FilterComponent";
import { useCurrent } from "../../hooks/state";
import { exit } from "process";
import api from "../../services/api";
//import { Loader } from "../../components/Loader";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";



export function HomeFinanceiro() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState();
  const [fileName, setFileName] = useState("");
  const [classNameForm, setClassNameForm] = useState<string>("header");
  const [classNameP, setClassNameP] = useState<string>("header");
  const [columns, setColumns] = useState<any>([]);
  const [data, setData] = useState<any[]>([]);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);


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
      .replace(/\s/g, '')
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
          "Verifique se o nome das colunas foram preenchidos corretamente, precisa ter: nome, chapa, codpessoa, cpf"
        );
      } 
      const obj = {
        name: c,
        selector: c.replace(/\s/g, ''),
        sortable: true,
      };
      return obj;
    });

    console.log(columns);

    setData(list);
    console.log(list)
    
    setColumns(columns);
  };
  const filteredItems = data.filter(
    (item) =>
      item.datadavenda && item.datadavenda.toLowerCase().includes(filterText.toLowerCase())
  );
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  async function HandleClickUpload() {
    if (error) {
      alert("Upload negado! Existem valores nulos na tabela, favor verificar.");
    } else {
      setLoading(true);
      for (const pessoa of data) {
        try {
         /*  const response = await api.post(
            
          ); */
        } catch (error) {
          alert("Erro ao fazer Upload");
          setLoading(false);
          setData([]);
          throw "exit";
        }
      }
      alert("Upload feito com sucesso")
      setData([]);
      setLoading(false);
    }
  }

  return (
    <>
        <Container style={{display: loading?"none":"flex"}} >
          <Header></Header>
          <Wrapper>
            <NameCompany>{'ETM'}</NameCompany>
            <FormWrapper
              className={classNameForm}
              {...getRootProps()}
              action="upload.php"
              method="POST"
            >
              <FormInput {...getInputProps()} type="file" />
              {data.length == 0 ? (
                <div className="wrapper">
                  <AiFillDiff color={"#7d7d7d"} size={70} />
                  <FormP>
                    Arraste o arquivo CSV para essa área ou click nela.
                  </FormP>
                </div>
              ) : (
                <div className="wrapper">
                  <AiOutlineCheckCircle color="#117A60" size={70} />
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
                    data={data}
                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                    subHeader
                    persistTableHead
                  />
                </Table>
                <FormButton
                  style={{
                    background: error ? "#9c0000" : "#117A60",
                  }}
                  onClick={HandleClickUpload}
                  type="submit"
                >
                  {error ? "CSV inválido" : "Fazer upload"}
                </FormButton>
              </>
            )}
          </Wrapper>
        </Container>
     
    </>
  );
}

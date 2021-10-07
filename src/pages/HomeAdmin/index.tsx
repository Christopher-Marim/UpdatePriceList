import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import api from "../../services/api";

import "../../styles/effects.scss";
import { Grafico } from "../../components/Grafico";
import { Container, ContainerGrafico, MainHome } from "./styles";

interface InputProps extends React.ChangeEvent<HTMLInputElement> {}
interface SelectProps extends React.ChangeEvent<HTMLSelectElement> {}
export interface Product {
  id: string;
  codigo: string;
  nome: string;
  preco: number;
  tabela: string;
  nomeTabela: string;
}

export interface Response {
  R_E_C_N_O_: string;
  DA1_CODTAB: string;
  DA1_CODPRO: string;
  DA1_PRCVEN: string;
  DA1_ATIVO: string;
  D_E_L_E_T_: string;
  R_E_C_D_E_L_: string;
  nomeProduto: string;
  nomeTabela: string;
}

export function HomeAdmin() {
  const [codProduto, setcodProduto] = useState<string>("");
  const [listProdutos, setListProdutos] = useState<Product[]>([]);
  const [nameProduct, setNameProduct] = useState<string>("");
  const [priceProduct, setPriceProduct] = useState<string>("");
  const [priceProductAverage, setPriceProductAverage] = useState<string>("");
  const [filialSelected, setFilialSelected] = useState<string>("001");
  const [visibleContainerGrafic, setVisibleContainerGrafic] = useState(false);
  const [visibleGrafic, setVisibleGrafic] = useState(false);

  useEffect(() => {
    if (visibleContainerGrafic) {
      setTimeout(() => {
        setVisibleGrafic(true);
      }, 550);
    } else {
      setVisibleGrafic(false);
    }
  }, [visibleContainerGrafic]);

  async function ChangeTextProduct(event: InputProps) {
    const text = event.target.value;
    setcodProduto(text);

    if (text.length === 6) {
      getProduct(text);
    } else {
      setPriceProductAverage("");
      setNameProduct("");
    }
  }

  function ChangeSelectedFilial(event: SelectProps) {
    const text = event.target.value;
    setFilialSelected(text);
  }

  function ModelListProdutos(responseData: Response[] = []) {
    const response: Product[] = responseData?.map((item) => {
      const object = {
        id: item.R_E_C_N_O_.trim(),
        codigo: item.DA1_CODPRO.trim(),
        nome: item.nomeProduto.trim(),
        preco: parseFloat(item.DA1_PRCVEN.trim()),
        tabela: item.DA1_CODTAB.trim(),
        nomeTabela: item.nomeTabela.trim(),
      };
      return object;
    });

    setListProdutos(response);

    setNameProduct("Nome do Produto: " + response[0].nome);
    let inicialValue = 0;

    response.map(({ preco }) => {
      inicialValue = inicialValue + preco;
    });
    const media = inicialValue / response.length;
    setPriceProductAverage(`Preço médio: ${media.toFixed(2)}`);
  }

  //logica para pegar do listProdutos de produtos os produtos com o codigo digitado e retornar o preco médio deles
  async function getProduct(codProduct: string) {
    const response = await api.get(
      `/pricelist?method=getProduto&codProduto=${codProduct}`
    );

    if (response?.data.data) {
      console.log(response.data.data);
      ModelListProdutos(response.data.data);
    } else {
      alert("Erro ao conectar!");
    }
  }

  function getIdProdutoPriceList() {
    const produto = listProdutos.find((item) => {
      if (item.tabela == filialSelected) {
        return item;
      }
    });

    return produto?.id;
  }

  async function UpdatePrice() {
    const codRegistro = getIdProdutoPriceList();
    await api
      .get(
        `/pricelist?method=setPreco&codRegistro=${codRegistro}&novoValor=${priceProduct}`
      )
      .then((response) => {
        if (response.data.data) {
          getProduct(codProduto);
          setPriceProduct("");
          alert("Sucesso");
        } else {
          alert("Erro ao conectar!");
        }
      })
      .catch((e) => {
        console.error("Erro", e);
      });
  }
  //exemplo listProdutos de resposta da api

  return (
    <Container>
      <div id="app">
        <MainHome>
          <div>
            <div id="wrapper">
              <h1 className="glitch" data-text="ETM">
                ETM
              </h1>
              <span className="sub">Consultoria e Sistemas</span>
            </div>
            <form>
              <p>Código do produto</p>
              <input
                type="text"
                value={codProduto}
                onChange={ChangeTextProduct}
                maxLength={6}
                placeholder="Digite o código"
              />
              <div id="wrapperTable">
                <p id="sugestionPrice">{nameProduct}</p>
                {nameProduct.length > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleContainerGrafic(!visibleContainerGrafic)
                    }
                  >
                    {!visibleContainerGrafic && "Mostrar tabela de dados"}
                    {visibleContainerGrafic && "Ocultar tabela de dados"}
                  </button>
                )}
              </div>
              <p>Preço</p>
              <CurrencyInput
                prefix={"R$"}
                id="input-example"
                name="input-name"
                value={priceProduct}
                placeholder="Digite o preço"
                intlConfig={{ locale: "pt-br" }}
                decimalsLimit={2}
                onValueChange={(value) => {
                  setPriceProduct(value ? value : "");
                }}
              />
              <p id="sugestionPrice">{priceProductAverage}</p>
              <p>Filial</p>
              <select id="filiais" onChange={ChangeSelectedFilial}>
                <option value="001">Smartcase RBA - 01</option>
                <option value="003">Smartcase RCR - 02</option>
                <option value="002">Smartcase CBF - 03</option>
                <option value="006">Smartcase BLV - 04</option>
                <option value="013">Smartcase QSQPLZ - 05</option>
                <option value="011">Smartcase AMS - 07</option>
                <option value="005">Smartcase SJD - 08</option>
                <option value="006">Smartcase QSQBLV - 09</option>
                <option value="007">Smartcase PLZ - 11</option>
                <option value="014">Smartcase BVV - 12</option>
              </select>
              <button type="button" onClick={UpdatePrice}>
                Enviar
              </button>
            </form>
          </div>
        </MainHome>
      </div>
      <ContainerGrafico
        style={{
          flex: visibleContainerGrafic ? 12 : 0,
          padding: visibleContainerGrafic ? 20 : 0,
        }}
      >
        {visibleGrafic && <Grafico array={listProdutos}></Grafico>}
      </ContainerGrafico>
    </Container>
  );
}

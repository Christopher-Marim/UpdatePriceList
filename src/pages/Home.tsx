import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

import "../styles/home.scss";
import "../styles/effects.scss";
import api from "../services/api";
import { CustomizedTables } from "../components/Table";

interface InputProps extends React.ChangeEvent<HTMLInputElement> {}
interface SelectProps extends React.ChangeEvent<HTMLSelectElement> {}
interface Product {
  id: number;
  codigo: string;
  nome: string;
  preco: number;
  filial: string;
}

export function Home() {
  const [codProduto, setcodProduto] = useState<string>("");
  const [nameProduct, setNameProduct] = useState<string>("");
  const [priceProduct, setPriceProduct] = useState<string>("");
  const [priceProductAverage, setPriceProductAverage] = useState<string>("");
  const [filialSelected, setFilialSelected] = useState<string>("001");
  const [visibleTable, setVisibleTable] = useState(false);

  async function ChangeTextProduct(event: InputProps) {
    const text = event.target.value;
    setcodProduto(text);

    if (text.length === 6) {
      const media = await getProduct(text);
      setPriceProductAverage(`Preço médio: ${media.toFixed(2)}`);
    } else {
      setPriceProductAverage("");
      setNameProduct("");
    }
  }

  function ChangeSelectedFilial(event: SelectProps) {
    const text = event.target.value;
    setFilialSelected(text);
    console.warn(text);
  }

  //logica para pegar do array de produtos os produtos com o codigo digitado e retornar o preco médio deles
  async function getProduct(codProduct: string) {
    await api
      .get(`/pricelist?limit=10`)
      .then((response) => {
        if (response.data.data[0]) {
        } else {
          alert("Erro ao conectar!");
        }
      })
      .catch((e) => {
        console.error("Erro", e);
      });
    const products = array.filter((item: Product) => {
      if (item.codigo === codProduct) {
        return item;
      }
    });
    setNameProduct("Nome do Produto: " + products[0].nome);

    let inicialValue = 0;

    products.map(({ preco }) => {
      inicialValue = inicialValue + preco;
    });
    const media = inicialValue / products.length;

    return media;
  }
  //exemplo array de resposta da api
  const array: Product[] = [
    {
      id: 1,
      codigo: "160001",
      nome: "Bola",
      preco: 25.0,
      filial: "02",
    },
    {
      id: 2,
      codigo: "160001",
      nome: "Bola",
      preco: 30.0,
      filial: "03",
    },
    {
      id: 3,
      codigo: "160002",
      nome: "Bola",
      preco: 40.0,
      filial: "11",
    },
    {
      id: 4,
      codigo: "160001",
      nome: "Bola",
      preco: 25.0,
      filial: "02",
    },
    {
      id: 5,
      codigo: "160001",
      nome: "Bola",
      preco: 30.0,
      filial: "03",
    },
    {
      id: 6,
      codigo: "160002",
      nome: "Bola",
      preco: 40.0,
      filial: "11",
    },
    {
      id: 7,
      codigo: "160001",
      nome: "Bola",
      preco: 25.0,
      filial: "02",
    },
    {
      id: 8,
      codigo: "160001",
      nome: "Bola",
      preco: 30.0,
      filial: "03",
    },
    {
      id: 9,
      codigo: "160002",
      nome: "Bola",
      preco: 40.0,
      filial: "11",
    },
    {
      id: 10,
      codigo: "160001",
      nome: "Bola",
      preco: 25.0,
      filial: "02",
    },
    {
      id: 11,
      codigo: "160001",
      nome: "Bola",
      preco: 30.0,
      filial: "03",
    },
    {
      id: 12,
      codigo: "160002",
      nome: "Bola",
      preco: 40.0,
      filial: "11",
    },
    {
      id: 1,
      codigo: "160001",
      nome: "Bola",
      preco: 25.0,
      filial: "02",
    },
    {
      id: 2,
      codigo: "160001",
      nome: "Bola",
      preco: 30.0,
      filial: "03",
    },
    {
      id: 3,
      codigo: "160002",
      nome: "Bola",
      preco: 40.0,
      filial: "11",
    },
    {
      id: 4,
      codigo: "160001",
      nome: "Bola",
      preco: 25.0,
      filial: "02",
    },
    {
      id: 5,
      codigo: "160001",
      nome: "Bola",
      preco: 30.0,
      filial: "03",
    },
    {
      id: 6,
      codigo: "160002",
      nome: "Bola",
      preco: 40.0,
      filial: "11",
    },
    {
      id: 7,
      codigo: "160001",
      nome: "Bola",
      preco: 25.0,
      filial: "02",
    },
    {
      id: 8,
      codigo: "160001",
      nome: "Bola",
      preco: 30.0,
      filial: "03",
    },
    {
      id: 9,
      codigo: "160002",
      nome: "Bola",
      preco: 40.0,
      filial: "11",
    },
    {
      id: 10,
      codigo: "160001",
      nome: "Bola",
      preco: 25.0,
      filial: "02",
    },
    {
      id: 11,
      codigo: "160001",
      nome: "Bola",
      preco: 30.0,
      filial: "03",
    },
    {
      id: 12,
      codigo: "160002",
      nome: "Bola",
      preco: 40.0,
      filial: "11",
    },
  ];

  return (
    <div id="app">
      <main id="mainHome">
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
            <div id={"wrapperTable"}>
              <p id="sugestionPrice">{nameProduct}</p>
              {nameProduct.length > 0 && <button type="button" onClick={() =>setVisibleTable(true)}id="mostrarTabela">Mostrar tabela de dados</button>}
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
              onValueChange={(value) => setPriceProduct(value ? value : "")}
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
            <button>Enviar</button>
          </form>
          {visibleTable&&<CustomizedTables tabela={array}></CustomizedTables>}
          
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

import "../styles/home.scss";
import "../styles/effects.scss";

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

  function ChangeTextProduct(event: InputProps) {
    const text = event.target.value;
    setcodProduto(text);

    if (text.length === 6) {
      const media = getProduct(text);
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
  function getProduct(codProduct: string) {
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
            <p id="sugestionPrice">{nameProduct}</p>
            <p>Preço</p>
            <CurrencyInput
              prefix={"R$"}
              id="input-example"
              name="input-name"
              value={priceProduct}
              placeholder="Digite o preço"
              intlConfig={{ locale: "pt-br" }}
              decimalsLimit={2}
              onValueChange={(value) => setPriceProduct(value?value:'')}
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
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import "../styles/home.scss";
import "../styles/effects.scss";

export function Home() {
  return (
    <div id="app">
      <main>
        <div>
          <div id="wrapper">
            <h1
              className="glitch"
              data-text="
          ETM"
            >
              ETM
            </h1>
            <span className="sub">Consultoria e Sistemas</span>
          </div>
          <form>
            <h1></h1>
            <p>Código do produto</p>
            <input type="text" placeholder="Digite o código" />
            <p>Preço</p>

            <CurrencyInput
              prefix={"R$"}
              id="input-example"
              name="input-name"
              placeholder="Digite o valor do produto"
              intlConfig={{ locale: "pt-br" }}
              decimalsLimit={2}
              onValueChange={(value, name) => console.log(value, name)}
            />
            <p>Filial</p>
            <select id="filiais">
              <option value="volvo">Smartcase RBA - 01</option>
              <option value="volvo">Smartcase RCR - 02</option>
              <option value="volvo">Smartcase CBF - 03</option>
              <option value="volvo">Smartcase PLZ - 11</option>
              <option value="volvo">Smartcase BVV - 12</option>
            </select>

            <button>enviar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

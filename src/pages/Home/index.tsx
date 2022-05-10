import { useEffect, useState } from "react";
import api from "../../services/api";

import "../../styles/effects.scss";
import { Container, MainHome } from "./styles";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";

import { ImExit } from "react-icons/im";
export interface InputProps extends React.ChangeEvent<HTMLInputElement> {}
export interface SelectProps extends React.ChangeEvent<HTMLSelectElement> {}
export interface Product {
  id: string;
  codigo: string;
  nome: string;
  preco: number;
  tabela: string;
  nomeTabela: string;
}

export function Home() {
  const history = useHistory();
  const { signOut } = useAuth();

  return (
    <Container>
      <div id="app">
        <MainHome>
          <div>
            <div id="wrapper">
              <ImExit
                size={35}
                color="white"
                style={{
                  position: "absolute",
                  top: 30,
                  right: 40,
                  cursor: "pointer",
                }}
                className={"icon"}
                onClick={() => {
                  signOut();
                  history.push("/");
                }}
              />

              <div className="glitch" data-text="ETM">
                ETM
              </div>
              <span className="sub">Consultoria e Sistemas</span>
            </div>
            <form>
              <main>
                <div onClick={()=>history.push('/pages/HomeAdmin')}>Alterar Tabela de preço</div>
                <div onClick={()=>history.push('/pages/HomeFinanceiro')}>Financeiro</div>
                <div onClick={()=>history.push('/pages/HomeEstoque')}>APK's</div>
              </main>
            </form>
          </div>
        </MainHome>
      </div>
    </Container>
  );
}

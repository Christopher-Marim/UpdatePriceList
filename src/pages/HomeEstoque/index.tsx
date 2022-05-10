import { useEffect, useState } from "react";
import api from "../../services/api";

import "../../styles/effects.scss";
import { Container,  MainHome } from "./styles";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";

import { ImExit } from "react-icons/im";
export interface InputProps extends React.ChangeEvent<HTMLInputElement> {}
export interface SelectProps extends React.ChangeEvent<HTMLSelectElement> {}
export interface APK {
  id: string;
  nome: string;
  link: string;
}

export function HomeEstoque() {
  const history = useHistory();
  const {signOut} = useAuth();

  const [apks, setApks] = useState<APK[]>([])

  useEffect(()=>{
    /* getApks() */
  },[])

  async function getApks(codProduct: string) {
    try {
      const response = await api.get(
        `/`
      );
      console.log(response.data.data);
      setApks(response.data.data as APK[])
    } catch (error) {
      alert("Erro ao conectar!");
    }
  }

  return (
    <Container>
      <div id="app">
        <MainHome>
          <div>
            <div id="wrapper">
              <ImExit size={35} color='white' style={{position:"absolute", top:30, right:40,cursor:'pointer'}} 
              className={"icon"}
              onClick={ () => {
                signOut();
                history.push('/');
              }}/>
           
              <h1 className="glitch" data-text="ETM">
                ETM
              </h1>
              <span className="sub">Consultoria e Sistemas</span>
            </div>
            <form className='list'>
              <h4>APKS</h4>
              <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40christophermarim/WiseCollect-3359761b9fdc42aaa402befafe951b4a-signed.aab">WiseCollect</a>
            </form>
          </div>
        </MainHome>
      </div>
    </Container>
  );
}

import { useState } from "react";
import {useHistory} from 'react-router-dom'
import api from "../services/api";
import "../styles/login.scss";

interface InputProps extends React.ChangeEvent<HTMLInputElement> {}

export function Login() {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const history = useHistory();

  function ChangeTextLogin(event: InputProps) {
    const text = event.target.value;
    setLogin(text);
  }
  function ChangeTextPassword(event: InputProps) {
    const text = event.target.value;
    setPassword(text);
  }

  async function HandleClickSubmit() {
    console.warn(login, password);
    await api
      .get(
        `/Acessoappcoleta?method=loadAll&usuarioApp=${login}&senhaApp=${password}`
      )
      .then((response) => {
        if(response.data.data[0]) {
          history.push('/pages/UpdatePriceList');
        }
        else{
          alert("Erro ao conectar, verificar email e senha")
        }
   
      }).catch(()=>{console.error("Erro")})
      ;
  }

  return (
    <div id="page-login">
      <aside>
        <h1>ETM</h1>
        <span className="sub">Consultoria e Sistemas</span>
      </aside>
      <main id='mainLogin'>
        <div className="main-container">
          <form>
            <p>LOGIN</p>
            <input
              type="text"
              value={login}
              onChange={ChangeTextLogin}
              placeholder="Email"
            />
            <input
              type="password" 
              name="password"
              value={password}
              onChange={ChangeTextPassword}
              placeholder="Senha"
            />
            <button type="button" onClick={HandleClickSubmit}>
              Entrar
            </button>
            <a  target='_blank'  href="http://www.etm.srv.br/">Preciso de ajuda</a>
          </form>
        </div>
      </main>
    </div>
  );
}

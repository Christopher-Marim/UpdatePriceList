import { useEffect, useState } from "react";
import { useHistory } from "react-router";
//import { Loader } from "../components/Loader";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
import {
  Button,
  Container,
  FormContainer,
  Image,
  Input,
  Link,
  MainContainer,
  Titulo,
} from "./styles";

interface InputProps extends React.ChangeEvent<HTMLInputElement> {}

interface RequestSignIn {
  login: string;
  senha: string;
}

export function Login() {
  const [loginText, setLoginText] = useState<string>("");
  const [passwordText, setPasswordText] = useState<string>("");

  const history = useHistory();
  const { signIn, user, loading } = useAuth();

  function ChangeTextLogin(event: InputProps) {
    const text = event.target.value;
    setLoginText(text);
  }
  function ChangeTextPassoword(event: InputProps) {
    const text = event.target.value;
    setPasswordText(text);
  }

  useEffect(() => {
    if(user){
      if (user?.admin==true) {
         history.push("/pages/HomeAdmin");
      }
      else{
       history.push("/pages/HomeFinanceiro");
      }
    }
  },[user]);

  async function HandleClickLogin() {
    const login = {
      login: loginText,
      senha: passwordText,
    };
    await signIn(login); 
  }

  return (
      <Container>
        <Image>
          <h1>ETM</h1>
          <span className='sub'>Consultoria e Sistemas</span>
        </Image>
        <MainContainer>
          <div>
            <h1>ETM</h1>
            <span className='sub'>Consultoria e Sistemas</span>
          </div>
          <FormContainer>
          <Titulo>
            LOGIN
          </Titulo>
            <Input
              onChange={ChangeTextLogin}
              value={loginText}
              type="text"
              placeholder="Email"
            />
            <Input              
              onChange={ChangeTextPassoword}
              value={passwordText}
              type="password"
              placeholder="Senha"
            />
            <Button type="button" onClick={HandleClickLogin}>
              Entrar
            </Button>
            <Link href="http://www.etm.srv.br/" target="_blank">
              Preciso de ajuda
            </Link>
          </FormContainer>
          <div></div>
          <div></div>
        </MainContainer>
      </Container>
  );
}

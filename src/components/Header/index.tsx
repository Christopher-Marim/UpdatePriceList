import { useState } from "react";
import {
  HeaderContainer,
  HeaderName,
  Logo,
} from "./styles";

import { ImExit } from "react-icons/im";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";


interface Props {
  children?:JSX.Element
}

export function Header({children}:Props) {
   const history = useHistory();
   const {signOut} = useAuth();

  const [classNameText, setClassNameText] = useState<string>("small");
  
  return (
    <HeaderContainer className={'small'}>
      {classNameText=='small'?children?children:<span></span>:<span></span>}
      <HeaderName>
        Financeiro
      </HeaderName>
      <ImExit size={35} style={{marginRight:30}} 
              className={"icon"}
              onClick={ () => {
                signOut();
                history.push('/');
              }}/>
    </HeaderContainer>
  );
}

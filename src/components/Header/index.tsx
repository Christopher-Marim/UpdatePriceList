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
  nome?:string;
}

export function Header({nome}:Props) {
   const history = useHistory();
   const {signOut} = useAuth();
  
  return (
    <HeaderContainer className={'small'}>
      <div></div>
      <HeaderName>
        {nome}
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

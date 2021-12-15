import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(#68e9be, #363f6e, #080c30);
  
  .criador{
    color:#68e9be65;
    display:flex;
    position: absolute;
    bottom:0;
    margin:20px;
    right:0;
    font-size:13px
  }

  .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .icon{
    margin-left: 20px;

    &:hover{;
      border-width: 2px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
      border-radius: 100px;
      transition: ease-in-out 400ms;
    }
  }
`;
export const NameCompany = styled.h1`
  font-size:20px;
  font-family: 'Lato', Times, serif;
  margin: 10px;
  color:white;
`;
export const Table = styled.table`
  display: block;
  background-color: white;
  overflow:auto;
  margin-top:20px;
  color:black;
  width:100%;
  max-height: 700px;
  border: 2px solid white;
  border-radius:10px;

  .titulo{
    margin-top:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: bold;
  }
  
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 140px;
  justify-content: space-between;
  background-color: transparent;
  color:white;
  align-items: center;
  flex-direction: column;
  width: 700px;
  margin-bottom: 20px;
  height: 100%;
  font-weight: bold;

  span{
    color:red;
    margin-top: 20px;
  }
`;

export const FormP = styled.p`
    width: 100%;
    margin-top: -50px;
    height: 100%;
    text-align: center;
    line-height: 170px;
    background-color: transparent;
    color: white;
    font-family: Arial;
    font-size: 18px;

    &.completeP {
        color:#23f350;
        font-size: 18px;
      }
  
`;

export const HeaderInputs = styled.div` 
    display:flex;
    justify-content: center;
    width: 700px;
    padding: 10px 0px;
    margin-bottom: 20px;

    .selectAdministradora { 
      display: block;
      font-family: "Roboto", sans-serif;
      background-color: transparent;
      
      border-width: 2.5px;
      border-color: white;
      color: white;
      font-size:18px;
      border-radius: 0.5rem;
      padding: 1rem 1rem;
      margin-right: 10px;
      padding: 0px 20px;
      max-height: 60px;
      max-width: 120px;
      min-height: 45px;
      cursor: pointer;
  
      option{
        background: #363f6e;
      }
     

      @media (max-width: 1024px) {
        font-size: 15px;
      }
  }

  input{
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 2.5px solid white;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size:18px;      
    padding: 10px; 
    border-radius: 0.5rem;
    &::placeholder{
      color:white;
    }
  }

  .headerInput{
      margin: 0 10px;    
      width: 200px;
  }  
`;
export const FormInput = styled.input`
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    background-color: transparent;
    color: white;
  
`;
export const FormButton = styled.button`
    color: #fff;
    border: none;
    width:100%;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    height: 35px;
    border-radius: 4px;
    transition: all .2s ease;
    outline: none;
    cursor: pointer;

    &:hover{
    filter: brightness(0.8);
  }
  
  &:active{
    border:0;
  }
`;

export const FormWrapper = styled.form`
  background-color: transparent;
    color: white;
    width: 700px;
    height: 200px;
    border: 4px dashed white;

    &.complete {
        border: 4px dashed white;
      }
`;

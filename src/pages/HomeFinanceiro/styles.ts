import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background: #e3e3e3;

  .wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .icon{
    margin-left: 20px;

    &:hover{
      background-color: #ddd;
      border-width: 2px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
      border-radius: 100px;
      transition: ease-in-out 400ms;
    }
  }
`;
export const NameCompany = styled.h1`
  font-size:20px;
  font-weight: bold;
  font-family: 'Lato', Times, serif;
  margin: 20px;
`;
export const Table = styled.table`
  display: block;
  background-color: white;
  overflow:auto;
  margin-top:20px;
  width:100%;
  min-height: 500px;
  max-height: 500px;
  border: 2px solid gray;

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
    color: gray;
    font-family: Arial;
    font-size: 18px;

    &.completeP {
        color:#117A60;
        font-size: 18px;
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

    &:hover{
    filter: brightness(0.8);
  }
  
  &:active{
    border:0;
  }
`;

export const FormWrapper = styled.form`
  background-color: #fff;
    width: 500px;
    height: 200px;
    border: 4px dashed gray;

    &.complete {
        border: 4px dashed #117A60;
      }
`;

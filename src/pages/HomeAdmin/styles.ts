import styled from "styled-components";

export const Container = styled.div`
flex: 1;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;

@media (max-width: 1024px) {
  flex-direction: column;
        }

`;

export const ContainerGrafico = styled.div`
 display: flex; 
  width: 100%;
  height: 100vh;
  background-color:#fff;
  color:black;
  overflow:hidden;
  transition:flex ease-in-out 500ms;
  
`;

export const MainHome = styled.div`
  
  form {
    flex: 8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25rem;
    min-width: 250px;
    padding: 20px 0px;
    align-items: center;

    #wrapperTable{
      display: flex;
      width: 100%;
      
      button{
        background-color: transparent;
        width: 50%;
        font-size: 0.75rem;
        border-radius: 0px;
        border-width: 0px;     
        align-items:flex-start;
        margin: 0px;
        padding: 5px 0px;
        &:hover {
          text-decoration:underline
        }

        @media (max-width: 1024px) {
          font-size: 10px;
        }
      }
    }

    p {
      font-size: 18px;
      padding: 1.25rem 0px;
      color:white;
      font-family: "Roboto", sans-serif;
      align-items: flex-start;
      width: 100%;

      @media (max-width: 1024px) {
        font-size: 15px;
      }
    }

    #sugestionPrice {
      padding: 5px 0px;
      color: #00fff9;
      font-size: .75rem;
      @media (max-width: 1024px) {
          font-size: 10px;
        }
    }
   
    input {
      font-family: "Roboto", sans-serif;
      color: #333;
      font-size: 18px;
      margin: 0 auto;
      padding: 1rem 1rem;
      max-height: 60px;
      min-height: 45px;
      border-radius: 0.5rem;
      background-color: rgb(255, 255, 255);
      border: none;
      width: 100%;
      display: block;
      transition: all 0.3s;

      @media (max-width: 1024px) {
        font-size: 15px;
      }
    }

    select {
      font-family: "Roboto", sans-serif;
      appearance: none;
      background-color: #fff;
      color: #333;
      font-size:18px;
      border-radius: 0.5rem;
      border: none;
      padding: 1rem 1rem;
      margin: 0 auto;
      width: 100%;
      max-height: 60px;
      min-height: 45px;
      cursor: inherit;
      line-height: inherit;

      // Stack above custom arrow
      z-index: 1;

      @media (max-width: 1024px) {
        font-size: 15px;
      }
    }

    button {
      font-family: "Roboto", sans-serif;
      appearance: none;
      letter-spacing:0.1rem;
      background-color: #009e9b;
      color: #fff;
      font-size: 18px;
      border-radius: 0.5rem;
      max-height: 60px;
      min-height: 45px;
      border: 1;
      border-color: #fff;
      padding: 1rem 1rem;
      width: 50%;
      margin: 50px 0px;

      &:hover {
        filter:brightness(0.9)
      }

      @media (max-width: 1024px) {
        font-size: 15px;
      }
    }
  }

`;

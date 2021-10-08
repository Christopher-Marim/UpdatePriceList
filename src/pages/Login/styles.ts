import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  flex:1;
  display: flex;
  height: 100vh;
  width:100%;
  align-items: stretch;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Image = styled.aside`
  flex:0; 
 display: none;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: linear-gradient(rgba(10, 10, 10, 0.6), rgba(0, 0, 0, 0.9)),
    repeating-linear-gradient(
      0,
      transparent,
      transparent 2px,
      black 3px,
      black 3px
    ),
    url("https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7118759521e3184778a3b5e010e202c6");
  background-size: cover;
  background-position: center;
  z-index: 1;

  .sub{
      display: none;
  }

  @media (min-width: 1025px) {
    flex: 8;
    display: flex;
    .sub {
    font-family:"Roboto";
    color: rgb(100, 220, 220);
    display: block;
    font-size: 0.8em;
    letter-spacing: 1em;
  }

  h1 {
    display: block;
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 3em;
    letter-spacing: 0.5em;
  }
  }
`;

export const Logo = styled.img`
  margin: 90px;
`

export const MainContainer = styled.div`
  flex: 7;
  background: rgb(12, 12, 12);
  min-height: 100vh;
  padding: 120px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-color: #fff;
  z-index: 1;

  div{ display:none}
  
   @media (max-width: 1024px) {
  background: linear-gradient(rgba(10, 10, 10, 0.6), rgba(0, 0, 0, 0.9)),
    repeating-linear-gradient(
      0,
      transparent,
      transparent 2px,
      black 3px,
      black 3px
    ),
    url("https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7118759521e3184778a3b5e010e202c6");
  background-size: cover;

  div{ 
      display: flex;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 10%;
  }
  
  .sub {
    display: block;
    font-family:"Roboto";
    color: rgb(100, 220, 220);
    letter-spacing: 1em;
    font-size: 12px;
  }

  h1 {
    display: block;
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 40px;
    letter-spacing: 0.5em;
  }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 100%;
 
`;

export const Input = styled.input`
      height: 45px;
      border-radius: 8px;
      padding: 0 16px;
      margin:5px;
      background-color: #fff;
      width: 100%;
      max-width:320px;
      border: 2px solid #a8a8b3;
`;
export const Titulo = styled.p`
      font-family: "Montserrat" sans-serif;
      font-weight: bold;
      color: black;
      font-size: 1.5em;
      letter-spacing: 0.15em;
      margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 28px;
    color: white;
  }

 
`;
export const Button = styled.button`
      width: 100%;
      max-width:320px;
      border-radius: 8px;
      height: 45px;
      margin-top: 20px;
      color: #fff;
      background-color: black;
      border: 1px solid black;
      cursor: pointer;
      &:hover {
        filter:brightness(0.8);
      }

        @media (max-width: 1024px) {
            background-color: black;
            border: 1px solid white;
        }
`;

export const Link = styled.a`
      display: flex;
      font-family: 'Roboto';
      font-size: 12px;
      margin-top: 10px;
      width: 100%;
      justify-content: center;
      color:blue;

      &:hover{
          filter:brightness(0.4)
      }

      @media (max-width: 1024px) {
            color:white;
        }
`;


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

export const MainHome = styled.div`
  flex: 1;
  display: flex;
 
  form{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-width: 250px;
    height: 30rem;
    padding: 20px 0px;

    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 100px;
      height: 300px;
      margin: 10px;
      border-radius: 10px;
      background: rgb(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: white;
      font-family: sans-serif;
      letter-spacing: 0.2rem;
      text-align: center;
      &:hover {
        filter: brightness(0.9);
        cursor: pointer;
      }

      @media (max-width: 1024px) {
        height: 100px;
      }
    }
  }
`;

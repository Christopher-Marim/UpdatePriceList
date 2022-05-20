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
  background-color: #fff;
  color: black;
  overflow: hidden;
  transition: flex ease-in-out 500ms;
`;

export const MainHome = styled.div`
  .list {
    display: flex;
    flex-direction:column ;
    justify-content: flex-start;
    align-items: center;
    overflow:auto; 

    width: 30%;
    height: 70vh;
    padding: 0.1rem;
    margin-top:40px ;

    h4{
      display: flex;
      text-align: center;
      align-items: center;
      color: rgb(255, 255, 255, 0.5);
      margin-bottom:40px ;
      @media (max-width: 1024px) {
      font-size: 3rem;
      }
    }

    @media (max-width: 1024px) {
      width: 100%;
      }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background: rgb(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: white;
      width: 100%;
      padding:20px ;
      height: 50px;
      margin-bottom:20px ;
      font-size: 1rem;
      cursor: pointer ;
      text-decoration:none;

      &:hover {
        filter: brightness(0.9);
      }

      @media (max-width: 1024px) {
      font-size: 2rem;
      }
    }
  }
`;

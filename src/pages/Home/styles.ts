import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
 
flex: 1;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
margin: ${px2vw(32)};

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const App = styled.div`
  flex: 7;
  background: rgb(12, 12, 12);
  margin: 0;
  height: 100vh;
  padding: 120px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
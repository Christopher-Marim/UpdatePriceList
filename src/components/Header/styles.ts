import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: fixed;
    width: 100%;
    height: 100px;
    font-weight: bold;
    align-items: center;
    text-align: center;
    background: transparent;
    color:white;
    transition: .3s;

    .icon{
       margin-right: 20px;
    &:hover{
      padding: 5px;
      border-width: 2px;
      transition: ease-in-out 400ms;
    }
  }
    
    &.small {
      height: 100px;
      box-shadow: 0 10px 10px rgba(black, .2);    
      }
      .headerLogo {
        height: 60px;
        text-shadow: none;      
      }

      &.none {
      height: 0px;

      .headerLogo {
        height: 0px;
        text-shadow: none;
        
      }

      .icon{
        height: 0px;
      }
      }
 
`;
export const HeaderName = styled.h1`
    margin-left: 80px;
    font-size: 50px;
    text-shadow: 3px 4px rgba(black, .1);
    transition: .3s;
    color:white;
 
`;
export const Logo = styled.img`
    
`;

import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const DivText = styled.p`
font-size: 40px;
line-height: 0px;
`;

export const DivSubText = styled.p`
font-size: 30px;
line-height: 0px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
  
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  width: 350px;
`;

export const CardText = styled.p`
margin-left: 5px;
`;

export const CardSpan = styled.span`
margin-left: 125px;
font-size: 23px;
`;

export const ButtonIngresar = styled.button`
  width: 307px;
  height: 55px;
  background: #e94785;
  border-radius: 5px;
  color: #ffffff;
  border: 0;
  margin: 20px 40px 20px 20px;
  cursor: pointer;
  &:hover  {
    color: #fff;
    background-color: #E31C79;
    border-color: #0a58ca;
    transform: scale(1.1);
    -moz-transition: .3s linear;
    -webkit-transition: .3s ease-out;
    transition: .3s linear;
  }
`;

export const TitleButton = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

export const Footer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextFooter = styled.p`
margin-top: 2%;
font-size: 22px;
`;

export const SpanFooter = styled.span`
color: blue;
cursor: pointer;
`;
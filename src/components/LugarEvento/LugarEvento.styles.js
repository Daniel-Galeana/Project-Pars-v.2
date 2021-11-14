import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 280px;
  border: 2px solid black;
  width: 65%;
  margin-left: 300px;
`;

export const DivText = styled.p`
font-size: 32px;
`;

export const Input = styled.input`
  width: 361px;
  height: 29px;
  font-size: 22px;
  background-color: #fafafa;
  border: 2px solid #ccc;
  margin-bottom: 2%;
  &:focus-visible  {
    border: 3px solid #e94785;
  }
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

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

export const ContainerOpc = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

export const ContainerOpcItem = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-right: 15%;
`;

export const DivOpc = styled.div`
  border: 1px solid #e94785;
  border-radius: 55px;
  width: 100px;
  height: 100px;
  background-color: #e94785;
  cursor: pointer;
  &:hover  {
    color: #fff;
    background-color: #E31C79;
    border-color: #0a58ca;
  }
`;

export const TextOpc = styled.p`
font-size: 18px;
`;
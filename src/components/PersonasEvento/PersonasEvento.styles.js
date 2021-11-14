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

export const OpcItem = styled.button`
  width: 361px;
  height: 29px;
  font-size: 22px;
  background-color: #fafafa;
  border: 2px solid #ccc;
  margin-bottom: 2%;
  cursor: pointer;
  &:hover  {
    color: #fff;
    background-color: #E09fba;
    border-color: #E09fba;
    transform: scale(1.1);
    -moz-transition: .3s linear;
    -webkit-transition: .3s ease-out;
    transition: .3s linear;
  }
`;
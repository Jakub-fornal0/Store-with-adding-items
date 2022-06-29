import styled from "styled-components";

export const Main_container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100vw;
`;

export const Form = styled.form`
  width: 100vw;
`;

export const LoginButton = styled.button`
  width: 15vw;
  padding: 15px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 15px;
  background-color: #277a5c;
  border-color: #277a5c;
  color: white;
  cursor: pointer;
  transition: 0.7s ease-in-out;

  &:hover {
    color: #277a5c;
    background-color: white;
    border-color: #277a5c;
  }
`;

export const Error = styled.div`
  width: 370px;
  padding: 15px;
  margin: 5px 0;
  font-size: 14px;
  background-color: #f34646;
  color: white;
  border-radius: 5px;
  text-align: center;
`;

export const LoginH1 = styled.h1`
  text-align: center;
  font-weight: lighter;
`;

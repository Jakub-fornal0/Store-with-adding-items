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

export const RegisterButton = styled.button`
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

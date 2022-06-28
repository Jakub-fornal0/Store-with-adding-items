import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #277a5c;
  margin: 0;
  overflow: hidden;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Li = styled.li`
  display: inline-block;
  list-style-type: none;

  &:first-child {
    margin-right: auto;
  }
`;

export const ALogo = styled.a`
  color: #fff;
  display: block;
  line-height: 3em;
  padding: 8px 3em;
  text-decoration: none;
  font-weight: bold;
  font-size: 19px;
`;

export const ANav = styled.a`
  color: white;
  display: block;
  line-height: 3em;
  padding: 8px 2em;
  text-decoration: none;
  font-weight: bold;
  font-size: 19px;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #b8f2dd;
  }
`;

export const AAdd = styled.a`
  background-color: white;
  color: #277a5c;
  display: block;
  line-height: 3em;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 7px;
  margin-right: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 17px;
  transition: 0.7s ease-in-out;
  cursor: pointer;
  border-style: solid;
  border-radius: 10px;
  border-color: white;

  &:hover {
    color: white;
    background-color: #277a5c;
  }
`;

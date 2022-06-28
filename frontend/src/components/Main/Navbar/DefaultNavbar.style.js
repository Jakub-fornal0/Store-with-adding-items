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

export const ANav = styled.span`
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

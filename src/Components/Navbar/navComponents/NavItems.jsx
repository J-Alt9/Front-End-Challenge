import React from "react";
//Packages
import styled from "styled-components";
import { Link } from "react-router-dom";
//Custom Hooks
import useData from "../../../hooks/useData";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0;
  li {
    flex-basis: auto;
    margin-left: 20px;
  }
  a {
    color: ${(props) => props.theme.dark_grey};
    text-decoration: none;
    transition: all 0.3s ease-out;
    font-weight: 700;
  }
  a:hover {
    color: ${(props) => props.theme.blue};
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.dark_grey};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    margin: 0;

    li {
      color: ${(props) => props.theme.light_grey};
      padding-left: 20px;
      margin-bottom: 14px;
      font-size: 24px;
    }
    a {
      color: ${(props) => props.theme.light_grey};
    }
  }
`;

const NavItems = ({ open }) => {
  const data = useData();

  return (
    <Ul open={open}>
      {data.menu.map((el, i) => (
        <li key={i}>
          <Link to={el.url}>{el.name}</Link>
        </li>
      ))}
    </Ul>
  );
};

export default NavItems;

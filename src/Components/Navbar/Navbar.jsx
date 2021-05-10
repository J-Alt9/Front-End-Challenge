import React from "react";

//Packages
import styled from "styled-components";
import { Link } from "react-router-dom";
//Components
import BurgerMenu from "./navComponents/BurgerMenu";

const Nav = styled.nav`
  height: 55px;
  border-bottom: 2px solid ${(props) => props.theme.dark_grey};
  padding: 0 20px;
  display: flex;
  .logo {
    flex-basis: 40%;
    padding-top: 16px;
  }
  .logoTxt {
    color: ${(props) => props.theme.blue};
    font-weight: bolder;
    font-size: 24px;
    text-decoration: none;
  }
  .items {
    flex-basis: 60%;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link to="/" className="logoTxt"> LOGO </Link>
      </div>
      <div className="items">
        <BurgerMenu />
      </div>
    </Nav>
  );
};

export default Navbar;

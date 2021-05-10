import React, { useEffect } from "react";
//Packages
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeWrapper = styled.div`
  padding-top: 20%;
  display: flex;
  justify-content: center;

  div {
    display: inline-block;
    text-align: center;
  }

  h1 {
    font-family: monospace;
    font-size: 36px;
    color: ${(props) => props.theme.blue};
    overflow: hidden;
    border-right: 0.08em solid ${(props) => props.theme.grey};
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }
  button {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    font-size: 20px;
    margin-top: 66px;
    border: none;
    border-radius: 5px;
    padding: 14px;
    cursor: pointer;
    transition: all 0.6s ease-out;
  }
  button:hover {
    background-color: ${(props) => props.theme.dark_blue};
    color: ${(props) => props.theme.light_grey};
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${(props) => props.theme.grey};
    }
  }

  @media (max-width: 768px) {
    padding-top: 30%;
    h1 {
      font-size: 20px;
      letter-spacing: 0.1em;
      animation: none;
      white-space: normal;
      border-right: none;
    }
    button {
      font-size: 14px;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <HomeWrapper>
      <div>
        <h1>Wellcome to Our Company...</h1>
        <Link to="/aboutus">
          <button>Find out more !</button>
        </Link>
      </div>
    </HomeWrapper>
  );
};

export default Home;

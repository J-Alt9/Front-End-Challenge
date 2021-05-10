import React from "react";
//Packages
import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.lightest_grey};
  border-radius: 12px;
  padding: 26px;
  margin: 32px;

  :hover {
    background-color: ${(props) => props.theme.light_grey};
  }
  h3 {
    color: ${(props) => props.theme.blue};
    text-align: center;
    text-transform: uppercase;
  }
  p {
    color: ${(props) => props.theme.dark_grey};
    margin: 20px 0;
  }
  a {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.blue};
    padding: 10px;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 700;
    transition: all 0.4s ease-in;
  }
  a:hover {
    color: ${(props) => props.theme.light_grey};
    background-color: ${(props) => props.theme.dark_blue};
  }
.no {
display: none;
}
  
`;

const Card = (props) => {
  return (
    <CardWrapper className="card">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="desc">
        {props.children}
      </div>
      <a href="//" className={props.button}>Apply now!</a>
    </CardWrapper>
  );
};

export default Card;

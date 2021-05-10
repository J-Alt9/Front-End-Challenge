import React from "react";
//Packages
import styled from "styled-components";

const DescWrapper = styled.div`
  .wrapper {
    display: flex;
    padding: 40px 10px;
  }
  .reverse {
    flex-direction: row-reverse;
  }
  .column {
      flex-direction: column;
  }
  .column .img p{
margin: 0 auto;
  }

  .img {
    flex-basis: 25%;
  }
  .txt {
    flex-basis: 75%;
  }

  .img p {
    font-family: sans-serif;
    background-color: ${(props) => props.theme.light_blue};
    color: ${(props) => props.theme.white};
    font-weight: 900;
    font-size: 120px;
    width: 110px;
    height: 110px;
    text-align: center;
    border-radius: 50%;
    margin: 40px;
  }
  .txt p {
    color: ${(props) => props.theme.grey};
  }

  @media (max-width: 768px) {
    .wrapper {
        display: block;
    }
  }
`;

const Desc = (props) => {
  return (
    <DescWrapper>
      <div className={`wrapper ${props.direction}`}>
        <div className="img">
          <p>{props.img}</p>
        </div>
        <div className="txt">
          <p>{props.txt}</p>
        </div>
      </div>
    </DescWrapper>
  );
};

export default Desc;

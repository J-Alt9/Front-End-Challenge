import React, { useEffect } from "react";
//Packages
import styled from "styled-components";
//Components
import Card from "./Reusable/Card";

const CareerWrapper = styled.div`
  display: flex;
  .card {
    flex-basis: 25%;
  }


  @media (max-width: 768px){
    display: block;
  }
`;

const Career = () => {
  useEffect(() => {
    document.title = "Career";
  }, []);

  return (
    <CareerWrapper>
     <Card title="Lorem ipsum">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis vitae sem eget tristique.</p>
     </Card>
     <Card title="Lorem ipsum">
       <p>Aenean tincidunt facilisis tempor.  </p>
     </Card>
     <Card title="Lorem ipsum">
       <p>Maecenas porttitor leo a nulla placerat, sit amet aliquam metus egestas.</p>
     </Card>
     <Card title="Lorem ipsum">
       <p>Sed id mauris volutpat, tincidunt sem iaculis, rutrum lectus.</p>
     </Card>
    </CareerWrapper>
  );
};

export default Career;


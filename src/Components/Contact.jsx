import React, { useEffect } from "react";
//Packages
import styled from "styled-components";
//Components
import Card from "./Reusable/Card";

const ContactWrapper = styled.div`
  margin: 10% 20%;
`;

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <ContactWrapper>
      <Card title="Contact" button="no">
        <p>
          <b>Address:</b> Lorem Ipsum, 2000
        </p>
        <p>
          <b>Phone:</b> +328 995 6668
        </p>
        <p>
          <b>e-mail:</b> lorem@ipsum.com
        </p>
      </Card>
    </ContactWrapper>
  );
};

export default Contact;

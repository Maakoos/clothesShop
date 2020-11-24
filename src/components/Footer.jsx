import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  margin-top: 50px;
  padding: 20px 0;
  text-align: center;
  background-color: #b19d75;
  color: #fff;
  font-size: 14px;
`;

const DiscountMessage = styled.p`
  margin-bottom: 15px;
`;

const Code = styled.span`
  font-weight: 900;
`;

const Footer = () => (
  <Wrapper>
    <DiscountMessage>
      THANKS FOR STOPPING BY - TAKE 20% OFF WITH CODE <Code>SAVE20</Code>
    </DiscountMessage>
    <span>© 2020 Mr Parker - Wardrobe</span>
  </Wrapper>
);

export default Footer;

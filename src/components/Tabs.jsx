import React, { useState } from "react";
import styled, { css } from "styled-components";

const TabsBox = styled.div`
  position: relative;
  margin: 40px auto 0;
  max-width: 950px;
  font-size: 14px;
  color: #444;
`;

const TabName = styled.button`
  position: relative;
  padding: 5px;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  border: 1px solid #e4e4e4;
  border-bottom: none;
  cursor: pointer;

  &:nth-of-type(2) {
    border-left: none;
    border-right: none;
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #fff;
        z-index: 99;
      }
    `}

  @media (min-width: 768px) {
    padding: 12px;
  }
`;

const TabContent = styled.div`
  position: absolute;
  padding: 20px;
  width: 100%;
  border: 1px solid #e4e4e4;
`;

const TabParagraph = styled.p`
  margin-top: 5px;
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: 15px;
    `}
`;

const TabList = styled.ul`
  padding: 20px;
`;

const TabItem = styled.li``;

const Tabs = ({ composition, description, wash }) => {
  const [tabName, setTabName] = useState("first");

  const handleSetTabVisible = (name) => setTabName(name);

  const whichTabIsVisible = (tabName) => {
    switch (tabName) {
      case "first":
        return (
          <TabContent>
            <TabParagraph>{description}</TabParagraph>
            <TabList>
              <TabItem>Made in USA</TabItem>
              <TabItem>{wash}</TabItem>
              <TabItem>{composition}</TabItem>
              <TabItem>
                Model is 5ft 7 inches; Bust: 34”, Waist: 25”, Hips: 36”
              </TabItem>
              <TabItem>Model is wearing a size XS</TabItem>
              <TabItem>Relaxed Fit</TabItem>
              <TabItem>Shoes Featured Not Available For Purchase</TabItem>
            </TabList>
          </TabContent>
        );
      case "second":
        return (
          <TabContent>
            <TabParagraph>
              Delivery is free to all US destinations.
            </TabParagraph>
            <TabParagraph>
              Please allow 2-3 days for regular shipping.
            </TabParagraph>
            <TabParagraph marginTop>
              Expedited shipping for a small cost may be selected at checkout
            </TabParagraph>
          </TabContent>
        );
      case "third":
        return (
          <TabContent>
            <TabParagraph>Free returns offered on all products</TabParagraph>
            <TabParagraph marginTop>
              Simply return your item in it's original unworn condition complete
              with attached tags using the Returns form provided with your item.
            </TabParagraph>
          </TabContent>
        );
      default:
        return null;
    }
  };

  return (
    <TabsBox>
      <TabName active={true} onClick={() => handleSetTabVisible("first")}>
        Details
      </TabName>
      <TabName onClick={() => handleSetTabVisible("second")}>Delivery</TabName>
      <TabName onClick={() => handleSetTabVisible("third")}>Returns</TabName>
      {whichTabIsVisible(tabName)}
    </TabsBox>
  );
};

export default Tabs;

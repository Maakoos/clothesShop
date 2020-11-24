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
  outline: transparent;

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

const Tabs = ({ composition, description, wash }) => {
  const [tabName, setTabName] = useState("first");
  const [firstTabIsActive, setFirstTabIsActive] = useState(true);
  const [secondTabIsActive, setSecondTabIsActive] = useState(false);
  const [thirdTabIsActive, setThirdTabIsActive] = useState(false);

  const clearAllTablesActive = () => {
    setFirstTabIsActive(false);
    setSecondTabIsActive(false);
    setThirdTabIsActive(false);
  };

  const handleSetTabVisible = (name) => {
    setTabName(name);
    clearAllTablesActive();
    switch (name) {
      case "first":
        setFirstTabIsActive(true);
        break;
      case "second":
        setSecondTabIsActive(true);
        break;
      case "third":
        setThirdTabIsActive(true);
        break;
      default:
        return null;
    }
  };

  const whichTabIsVisible = (tabName) => {
    switch (tabName) {
      case "first":
        return (
          <TabContent>
            <TabParagraph>{description}</TabParagraph>
            <TabList>
              <li>Made in USA</li>
              <li>{wash}</li>
              <li>{composition}</li>
              <li>Model is 5ft 7 inches; Bust: 34”, Waist: 25”, Hips: 36”</li>
              <li>Model is wearing a size XS</li>
              <li>Relaxed Fit</li>
              <li>Shoes Featured Not Available For Purchase</li>
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
      <TabName
        onClick={() => handleSetTabVisible("first")}
        active={firstTabIsActive}
      >
        Details
      </TabName>
      <TabName
        onClick={() => handleSetTabVisible("second")}
        active={secondTabIsActive}
      >
        Delivery
      </TabName>
      <TabName
        onClick={() => handleSetTabVisible("third")}
        active={thirdTabIsActive}
      >
        Returns
      </TabName>
      {whichTabIsVisible(tabName)}
    </TabsBox>
  );
};

export default Tabs;

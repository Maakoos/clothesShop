import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import arrowDownIcon from "icons/arrow_down.svg";

const Wrapper = styled.main`
  padding: 0 15px;
  max-width: 1460px;
  margin: 20px auto 0;
  font-size: 14px;
`;

const Heading = styled.h1`
  font-size: 19px;
  font-weight: 700;
`;

const ContextBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 980px) {
    flex-direction: row;
  }
`;

const SelectBox = styled.div`
  position: relative;
  min-width: 140px;
  max-width: 140px;

  @media (min-width: 768px) {
    min-width: 175px;
  }

  @media (min-width: 980px) {
    margin-top: 50px;
  }
`;

const Select = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  width: 100%;
  background-color: transparent;
  font-size: 12px;
  font-family: inherit;
  border: 1px solid #d5d5d5;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-image: url(${arrowDownIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const SelectOptionList = styled.ul`
  position: absolute;
  top: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  list-style: none;
`;

const SelectOption = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e8e8e8;
  }
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 10px;
  padding-top: 15px;
  border-top: 1px solid #d5d5d5;
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(218px, 1fr));
  }

  @media (min-width: 980px) {
    margin-left: 35px;
  }
`;

const ProductLink = styled.a`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

const ProductImage = styled.img`
  margin-bottom: 10px;
  width: 100%;
`;

const ProductCollection = styled.p`
  font-style: italic;
`;

const ProductName = styled.p`
  margin: 7px 0;
`;

const ProductPrice = styled.p`
  font-weight: 800;
`;

const ShopBox = () => {
  const [openSelectList, setOpenSelectList] = useState(false);

  const selectListRef = useRef();
  const selectButtonRef = useRef();

  const handleOpenSelectList = () =>
    setOpenSelectList((prevValue) => !prevValue);

  const showSelectOptionList = openSelectList && (
    <SelectOptionList ref={selectListRef}>
      <SelectOption>Nike</SelectOption>
      <SelectOption>Adidas</SelectOption>
      <SelectOption>Adidas</SelectOption>
    </SelectOptionList>
  );

  const closeSelectList = (e) => {
    if (
      e.target.parentNode !== selectListRef.current &&
      e.target !== selectButtonRef.current
    ) {
      setOpenSelectList(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeSelectList);

    return () => {
      window.removeEventListener("click", closeSelectList);
    };
  }, []);

  return (
    <Wrapper>
      <Heading>New Arrivals</Heading>

      <ContextBox>
        <SelectBox>
          <Select onClick={handleOpenSelectList} ref={selectButtonRef}>
            Items by Brands
          </Select>
          {showSelectOptionList}
        </SelectBox>

        <ProductList>
          <li>
            <ProductLink href="/">
              <ProductImage
                src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
                alt=""
              />
              <ProductCollection>Flynn Skye</ProductCollection>
              <ProductName>Mimi Romper</ProductName>
              <ProductPrice>$159.00</ProductPrice>
            </ProductLink>
          </li>

          <li>
            <ProductLink href="/">
              <ProductImage
                src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
                alt=""
              />
              <ProductCollection>Flynn Skye</ProductCollection>
              <ProductName>Mimi Romper</ProductName>
              <ProductPrice>$159.00</ProductPrice>
            </ProductLink>
          </li>

          <li>
            <ProductLink href="/">
              <ProductImage
                src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
                alt=""
              />
              <ProductCollection>Flynn Skye</ProductCollection>
              <ProductName>Mimi Romper</ProductName>
              <ProductPrice>$159.00</ProductPrice>
            </ProductLink>
          </li>

          <li>
            <ProductLink href="/">
              <ProductImage
                src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
                alt=""
              />
              <ProductCollection>Flynn Skye</ProductCollection>
              <ProductName>Mimi Romper</ProductName>
              <ProductPrice>$159.00</ProductPrice>
            </ProductLink>
          </li>

          <li>
            <ProductLink href="/">
              <ProductImage
                src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
                alt=""
              />
              <ProductCollection>Flynn Skye</ProductCollection>
              <ProductName>Mimi Romper</ProductName>
              <ProductPrice>$159.00</ProductPrice>
            </ProductLink>
          </li>

          <li>
            <ProductLink href="/">
              <ProductImage
                src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
                alt=""
              />
              <ProductCollection>Flynn Skye</ProductCollection>
              <ProductName>Mimi Romper</ProductName>
              <ProductPrice>$159.00</ProductPrice>
            </ProductLink>
          </li>
        </ProductList>
      </ContextBox>
    </Wrapper>
  );
};

export default ShopBox;

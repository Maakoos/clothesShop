import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import arrowDownIcon from "icons/arrow_down.svg";

import ProductItem from "components/ProductItem";

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

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 980px) {
    align-items: flex-start;
  }
`;

const SelectBox = styled.div`
  align-self: flex-start;
  position: relative;
  min-width: 175px;
  max-width: 175px;

  @media (min-width: 768px) {
    min-width: 200px;
    max-width: 200px;
  }

  @media (min-width: 980px) {
    margin-top: 50px;
  }
`;

const SubHeading = styled.h2`
  margin-top: 30px;
  padding-bottom: 10px;
  color: #28323c;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px solid #d5d5d5;

  @media (min-width: 980px) {
    align-self: stretch;
  }
`;

const Paragraph = styled.p`
  margin: 15px 0;
  max-width: 380px;
  font-size: 14px;

  @media (min-width: 980px) {
    min-width: 320px;
    max-width: 320px;
  }
`;

const SelectBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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

const ShopBox = () => {
  const { shopProducts } = useSelector((store) => store);

  const [openSelectList, setOpenSelectList] = useState(false);
  const [products, setProducts] = useState(shopProducts);
  const [headingValue, setHeadingValue] = useState("New Arrivals");

  const selectListRef = useRef();
  const selectButtonRef = useRef();

  const handleOpenSelectList = () =>
    setOpenSelectList((prevValue) => !prevValue);

  const filterItems = (collection) => {
    if (collection === "All") {
      setProducts(shopProducts);
      setHeadingValue("New Arrivals");
      setOpenSelectList(false);
      return;
    }
    const filteredItems = shopProducts.filter(
      (product) => product.collection === collection
    );
    setProducts(filteredItems);
    setHeadingValue(collection);
    setOpenSelectList(false);
  };

  const showSelectOptionList = openSelectList && (
    <SelectOptionList ref={selectListRef}>
      <SelectOption onClick={() => filterItems("All")}>All</SelectOption>
      <SelectOption onClick={() => filterItems("Chaser")}>Chaser</SelectOption>
      <SelectOption onClick={() => filterItems("Blue Life")}>
        Blue Life
      </SelectOption>
      <SelectOption onClick={() => filterItems("Show me your Mumu")}>
        Mumu
      </SelectOption>
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
      <Heading>{headingValue}</Heading>
      <ContextBox>
        <Aside>
          <SelectBox>
            <SelectBtn onClick={handleOpenSelectList} ref={selectButtonRef}>
              Items by Brands
            </SelectBtn>
            {showSelectOptionList}
          </SelectBox>
          <SubHeading>Satisfaction guaranteed</SubHeading>
          <Paragraph>
            All product are backed by our awesome free returns policy. We want
            to make sure your new item is perfect and fits like a dream...{" "}
          </Paragraph>
          <Paragraph>
            No good? just send it back and we will work with you to find the
            right size or a replacement.
          </Paragraph>
        </Aside>
        <ProductList>
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </ProductList>
      </ContextBox>
    </Wrapper>
  );
};

export default ShopBox;

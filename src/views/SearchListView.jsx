import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import ProductItem from "components/ProductItem";
import { searchProduct } from "store/Actions";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1460px;
`;

const Heading = styled.h1`
  font-size: 19px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  margin: 20px 0;
  font-size: 14px;
`;

const SearchInput = styled.input`
  padding: 0 10px;
  width: 100%;
  height: 44px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: inherit;
  border: 1px solid #d5d5d5;
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

const NoResultInfo = styled.p`
  font-size: 30px;
  text-align: center;
`;

const SearchListView = () => {
  const [inputValue, setInputValue] = useState("");

  const { searchName, searchProducts } = useSelector((store) => store);

  const dispatch = useDispatch();

  const handleOnChange = (e) => setInputValue(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProduct(inputValue));
  };

  return (
    <Wrapper>
      <Heading>Search our store</Heading>
      <Paragraph>
        Your search for "{searchName}" revealed the following:
      </Paragraph>
      <form action="submit" onSubmit={handleOnSubmit}>
        <SearchInput
          type="text"
          placeholder="Search"
          valule={inputValue}
          onChange={handleOnChange}
        />
      </form>
      <ProductList>
        {searchProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ProductList>
      {searchProducts.length ? null : <NoResultInfo>No Result</NoResultInfo>}
    </Wrapper>
  );
};

export default SearchListView;

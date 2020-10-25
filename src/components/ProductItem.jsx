import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const ProductItem = ({ collection, id, name, price, srcImg }) => {
  const priceFixed = price.toFixed(2);

  return (
    <li>
      <ProductLink as={Link} to={`/details/${id}`}>
        <ProductImage src={srcImg} alt="" />
        <ProductCollection>{collection}</ProductCollection>
        <ProductName>{name}</ProductName>
        <ProductPrice>$ {priceFixed}</ProductPrice>
      </ProductLink>
    </li>
  );
};

export default ProductItem;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductLink = styled.a`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;

const ProductImage = styled.img`
  display: block;
  margin-bottom: 10px;
  width: 100%;
  transition: opacity 0.3s ease-in;
`;

const ImageBox = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover ${ProductImage} {
    opacity: 0;
  }
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

const ProductItem = ({ collection, id, name, price, images }) => {
  const priceFixed = price.toFixed(2);

  const mainImg = images[0];
  const backgroundImg = images[1];

  return (
    <li>
      <ProductLink as={Link} to={`/details/${id}`}>
        <ImageBox backgroundImg={backgroundImg}>
          <ProductImage src={mainImg} alt="" />
        </ImageBox>
        <ProductCollection>{collection}</ProductCollection>
        <ProductName>{name}</ProductName>
        <ProductPrice>$ {priceFixed}</ProductPrice>
      </ProductLink>
    </li>
  );
};

export default ProductItem;

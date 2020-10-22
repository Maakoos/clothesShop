import React from "react";
import styled from "styled-components";

import sprite from "icons/sprite.svg";
import logoImg from "img/logo.png";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media (min-width: 980px) {
    background-color: #000;
    color: #fff;
  }
`;

const DeliveryInfo = styled.p`
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;

  @media (min-width: 980px) {
    margin-right: 177px;
    padding: 10px 0;
    color: #fff;
  }
`;

const Icon = styled.svg`
  width: 100%;
  height: 100%;

  @media (min-width: 980px) {
    fill: #fff;
  }
`;

const CartBtn = styled.button`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 980px) {
    color: #fff;
  }
`;

const MobileLogo = styled.img`
  margin: 10px auto;
  width: 70%;
  max-width: 400px;

  @media (min-width: 980px) {
    max-width: 210px;
  }
`;

const Form = styled.form`
  display: none;

  @media (min-width: 980px) {
    display: flex;
    align-items: center;
  }
`;

const SearchInput = styled.input`
  padding-left: 10px;
  background: transparent;
  color: #fff;
  font-size: 15px;
  font-family: inherit;
  border: none;

  &::placeholder {
    color: inherit;
  }
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 25px;
  height: 25px;
`;

const Header = () => (
  <Wrapper>
    <TopBox>
      <Form action="submit">
        <InputLabel htmlFor="searchInput">
          <Icon>
            <use href={`${sprite}#search-24px`} />
          </Icon>
        </InputLabel>
        <SearchInput type="text" id="searchInput" placeholder="Search" />
      </Form>
      <DeliveryInfo>Free delivery on orders over $60</DeliveryInfo>
      <CartBtn>
        <Icon>
          <use href={`${sprite}#shopping_cart-24px`} />
        </Icon>
        0
      </CartBtn>
    </TopBox>
    <MobileLogo src={logoImg} />
  </Wrapper>
);

export default Header;

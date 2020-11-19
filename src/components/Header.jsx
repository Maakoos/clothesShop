import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

import sprite from "icons/sprite.svg";
import logoImg from "img/logo.png";

import { switchShopCart, searchProduct } from "store/Actions";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBox = styled.div`
  align-self: stretch;
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
  margin: 10px 0;
  width: 100%;
  max-width: 280px;
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

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const { shopCart } = useSelector((store) => store);

  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => setInputValue(e.target.value);

  const handleClickShopCartSwitch = () => dispatch(switchShopCart());

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProduct(inputValue));
    history.push("/search");
    setInputValue("");
  };

  const renderSearchBar =
    location.pathname !== "/search" ? (
      <Form action="submit" onSubmit={handleOnSubmit}>
        <InputLabel htmlFor="searchInput">
          <Icon>
            <use href={`${sprite}#search-24px`} />
          </Icon>
        </InputLabel>
        <SearchInput
          type="text"
          id="searchInput"
          placeholder="Search"
          value={inputValue}
          onChange={handleOnChange}
        />
      </Form>
    ) : null;

  return (
    <Wrapper>
      <TopBox>
        {renderSearchBar}
        <DeliveryInfo>Free delivery on orders over $60</DeliveryInfo>
        <CartBtn onClick={handleClickShopCartSwitch}>
          <Icon>
            <use href={`${sprite}#shopping_cart-24px`} />
          </Icon>
          {shopCart.length}
        </CartBtn>
      </TopBox>
      <Link to="/">
        <MobileLogo src={logoImg} />
      </Link>
    </Wrapper>
  );
};

export default Header;

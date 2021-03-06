import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";

import searchIcon from "icons/search.svg";
import shopingCartIcon from "icons/shopping_cart.svg";
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
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #000;
  color: #fff;

  @media (min-width: 980px) {
    justify-content: space-between;
  }
`;

const DeliveryInfo = styled.p`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  font-size: 13px;
  text-transform: uppercase;

  @media (min-width: 980px) {
    margin-right: 177px;
    margin-left: 0;
    padding: 10px 0;
    color: #fff;
  }
`;

const CartBtn = styled.button`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  background: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
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
  background-image: url(${searchIcon});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
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
        <InputLabel htmlFor="searchInput" />
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
          <img src={shopingCartIcon} alt="shopping cart icon" />
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

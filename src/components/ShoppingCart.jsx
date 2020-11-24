import React from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import arrowForwardIcon from "icons/arrow_forward.svg";

import ShoppingCartItem from "components/ShoppingCartItem";

import { switchShopCart } from "store/Actions";

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  padding: 15px;
  width: 320px;
  height: 100vh;
  background-color: #fff;
  color: #28323c;
  border: 1px solid #d5d5d5;
  overflow-y: scroll;

  ${({ isEmpty }) =>
    isEmpty &&
    css`
      &::after {
        content: "";
        display: block;
        margin-top: 40px;
        width: 100%;
        height: 1px;
        background-color: #d5d5d5;
      }
    `}

  @media (min-width: 1200px) {
    overflow-y: hidden;
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 20px;
  border-bottom: 1px solid #d5d5d5;
`;

const Heading = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  font-size: 14px;
  font-family: inherit;
  border: none;
  cursor: pointer;
`;

const CartList = styled.ul`
  margin-bottom: 15px;
  padding-top: 15px;
  padding: 15px 15px 0;
  list-style: none;
`;

const AccoridonsBox = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #d5d5d5;
`;

const TitleAccordion = styled.summary`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #d5d5d5;
  color: #fff;
  cursor: pointer;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: "+";
    display: block;
    transition: transform 0.2s ease;
  }
`;

const AditionalRemarks = styled.details`
  margin-bottom: 2px;

  &[open] ${TitleAccordion}::after {
    transform: rotate(135deg);
  }
`;

const AditionalMessage = styled.textarea`
  padding: 10px;
  width: 100%;
  min-height: 120px;
  font-size: 15px;
  font-family: inherit;
  resize: none;
  border: 1px solid #d5d5d5;
`;

const CodeInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  font-family: inherit;
  border: 1px solid #d5d5d5;
`;

const TotalPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  font-size: 18px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: transparent;
  color: #28323c;
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  border: 1px solid #28323c;
  cursor: pointer;
`;

const CheckOutButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: #393c4a;
  color: #d5d5d5;

  &::after {
    content: "";
    display: block;
    margin-left: 5px;
    width: 15px;
    height: 15px;
    background-image: url(${arrowForwardIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const EmptyCartMessage = styled.p`
  margin-top: 20px;
`;

const ShoppingCart = () => {
  const { shopCart } = useSelector((store) => store);

  const dispatch = useDispatch();

  const handleClickShopCartSwitch = () => dispatch(switchShopCart());

  const itemsPrice = shopCart.map(
    (item) => item.productDetails.price * item.quantity
  );

  const showTotalPrice =
    itemsPrice.length &&
    itemsPrice.reduce((prev = 0, curr) => {
      return prev + curr;
    });

  return (
    <Wrapper isEmpty={Boolean(shopCart.length)}>
      <CartHeader>
        <Heading>My Cart</Heading>
        <CloseBtn onClick={handleClickShopCartSwitch}>Close</CloseBtn>
      </CartHeader>
      {shopCart.length ? (
        <>
          {" "}
          <CartList>
            {shopCart.map((product) => (
              <ShoppingCartItem key={product.id} {...product} />
            ))}
          </CartList>
          <AccoridonsBox>
            <AditionalRemarks>
              <TitleAccordion>Order Special Instructions</TitleAccordion>
              <AditionalMessage />
            </AditionalRemarks>
            <AditionalRemarks>
              <TitleAccordion>Discount Code</TitleAccordion>
              <CodeInput type="text" placeholder="Enter Coupon Code" />
            </AditionalRemarks>
          </AccoridonsBox>
          <TotalPriceBox>
            <span>Total</span>
            <span>${showTotalPrice.toFixed(2)}</span>
          </TotalPriceBox>
          <Button>Continue Shopping</Button>
          <CheckOutButton>Check Out</CheckOutButton>
        </>
      ) : (
        <EmptyCartMessage>Your cart is curently empty.</EmptyCartMessage>
      )}
    </Wrapper>
  );
};

export default ShoppingCart;

import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import arrowForwardIcon from "icons/arrow_forward.svg";

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

  &::after {
    content: "";
    display: block;
    margin-top: 40px;
    width: 100%;
    height: 1px;
    background-color: #d5d5d5;
  }

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

const CartItem = styled.li`
  display: flex;

  margin-top: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid #d5d5d5;
`;

const ItemImage = styled.img`
  width: 80px;
`;

const ItemContentBox = styled.div`
  padding: 0 10px;
  font-size: 14px;
  font-weight: 600;
`;

const ItemName = styled.p``;

const ItemPrice = styled.p`
  margin: 8px 0;
`;

const QuantityBox = styled.div`
  display: flex;
`;

const SubtractionBtn = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 1px solid #d5d5d5;
  cursor: pointer;
`;

const QuantityInput = styled.input`
  width: 32px;
  height: 32px;
  text-align: center;
  font-family: inherit;
  border: 1px solid #d5d5d5;
`;

const AdditionBtn = styled(SubtractionBtn)``;

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

const TotalPriceTitle = styled.p``;

const TotalPriceValue = styled.p``;

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

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const handleClickShopCartSwitch = () => dispatch(switchShopCart());

  return (
    <Wrapper>
      <CartHeader>
        <Heading>My Cart</Heading>
        <CloseBtn onClick={handleClickShopCartSwitch}>Close</CloseBtn>
      </CartHeader>
      <CartList>
        <CartItem>
          <ItemImage
            src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
            alt=""
          />
          <ItemContentBox>
            <ItemName>Carmel Dree S</ItemName>
            <ItemPrice>$159.00</ItemPrice>
            <QuantityBox>
              <SubtractionBtn>−</SubtractionBtn>
              <QuantityInput type="number" />
              <AdditionBtn>+</AdditionBtn>
            </QuantityBox>
          </ItemContentBox>
        </CartItem>

        <CartItem>
          <ItemImage
            src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
            alt=""
          />
          <ItemContentBox>
            <ItemName>Carmel Dree S</ItemName>
            <ItemPrice>$159.00</ItemPrice>
            <QuantityBox>
              <SubtractionBtn>−</SubtractionBtn>
              <QuantityInput type="number" />
              <AdditionBtn>+</AdditionBtn>
            </QuantityBox>
          </ItemContentBox>
        </CartItem>

        <CartItem>
          <ItemImage
            src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637"
            alt=""
          />
          <ItemContentBox>
            <ItemName>Carmel Dree S</ItemName>
            <ItemPrice>$159.00</ItemPrice>
            <QuantityBox>
              <SubtractionBtn>−</SubtractionBtn>
              <QuantityInput type="number" />
              <AdditionBtn>+</AdditionBtn>
            </QuantityBox>
          </ItemContentBox>
        </CartItem>
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
        <TotalPriceTitle>Total</TotalPriceTitle>
        <TotalPriceValue>$159.00</TotalPriceValue>
      </TotalPriceBox>

      <Button>Continue Shopping</Button>
      <CheckOutButton>Check Out</CheckOutButton>
    </Wrapper>
  );
};

export default ShoppingCart;

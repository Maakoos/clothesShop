import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import removeItemIcon from "icons/delete.svg";

import { deleteProductFromCart, editQuantityValue } from "store/Actions";

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

const RemoveBtn = styled(SubtractionBtn)`
  margin-left: 10px;
  background-image: url(${removeItemIcon});
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
`;

const ShoppingCartItem = ({
  id,
  quantity,
  size,
  productDetails: { name, price, mainImg },
}) => {
  const [quantityInputValue, setQuantityInputValue] = useState(quantity);

  const dispatch = useDispatch();

  const itemsPrice = price.toFixed(2) * quantityInputValue;

  const handleAdditionQuantityValue = (e) => {
    e.preventDefault();
    setQuantityInputValue((prevValue) => prevValue + 1);
    dispatch(editQuantityValue(id, "adding"));
  };

  const handleSubtractionQuantityValue = (e) => {
    e.preventDefault();
    if (quantityInputValue === 1) return;
    setQuantityInputValue((prevValue) => prevValue - 1);
    dispatch(editQuantityValue(id, "substraction"));
  };

  const handleOnChangeQuantityInput = (e) =>
    setQuantityInputValue(e.target.value);

  const handleRemoveItem = () => dispatch(deleteProductFromCart(id));

  return (
    <CartItem>
      <ItemImage src={mainImg} alt="" />
      <ItemContentBox>
        <p>
          {name} {size}
        </p>
        <ItemPrice>${itemsPrice}</ItemPrice>
        <QuantityBox>
          <SubtractionBtn onClick={handleSubtractionQuantityValue}>
            −
          </SubtractionBtn>
          <QuantityInput
            type="number"
            value={quantityInputValue}
            onChange={handleOnChangeQuantityInput}
          />
          <AdditionBtn onClick={handleAdditionQuantityValue}>+</AdditionBtn>
          <RemoveBtn onClick={() => handleRemoveItem(id)} />
        </QuantityBox>
      </ItemContentBox>
    </CartItem>
  );
};

export default ShoppingCartItem;

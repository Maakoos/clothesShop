import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import arrowIcon from "icons/arrow_down.svg";

import Tabs from "components/Tabs";

import { addProductToCart } from "store/Actions";

const Wrapper = styled.main`
  margin: 30px auto 0;
  padding: 0 20px;
  max-width: 1200px;

  /* margin: 30px auto 0;

  @media (min-width: 500px) {
    width: 480px;
  }

  @media (min-width: 740px) {
    width: 720px;
  }

  @media (min-width: 780px) {
    width: 760px;
  }

  @media (min-width: 1220px) {
    width: 1200px;
  } */
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductDesctoption = styled.div`
  @media (min-width: 768px) {
    padding: 30px 40px;
  }
`;

const ImageBox = styled.div`
  position: relative;
`;

const ProductImg = styled.img`
  margin-bottom: 20px;
  width: 100%;
  max-width: 440px;

  @media (min-width: 1200px) {
    max-width: 600px;
  }
`;

const ProductCollection = styled.p`
  font-size: 14px;
  font-style: italic;
`;

const ProductName = styled.p`
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: 700;
`;

const ProductPrice = styled.p`
  text-align: center;
  font-size: 16px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const FormHeading = styled.h2`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
`;

const SizesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  gap: 8px;
  margin-bottom: 15px;
`;

const SizeLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-weight: 700;
  border: 1px solid #d5d5d5;
  cursor: pointer;
`;

const SizeInput = styled.input`
  display: none;

  &:checked + ${SizeLabel} {
    background-color: #28323c;
    color: #fff;
  }
`;

const QuantityBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
  gap: 8px;
`;

const SubtractionBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #d5d5d5;
  cursor: pointer;
`;

const QuantityInput = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-family: inherit;
  border: 1px solid #d5d5d5;
`;

const AdditionBtn = styled(SubtractionBtn)``;

const AddToCartBtn = styled.button`
  align-self: stretch;
  margin-top: 25px;
  height: 44px;
  background-color: #d5d5d5;
  color: #242424;
  font-size: 16px;
  font-family: inherit;
  border: none;
  cursor: pointer;
`;

const NextImgBtn = styled.button`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 35px;
  height: 35px;
  background: transparent;
  background-image: url(${arrowIcon});
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  transform: rotate(-90deg);
  opacity: 0.3;
`;

const PrevImgBtn = styled(NextImgBtn)`
  left: 10px;
  transform: rotate(90deg);
`;

const DetailsItemView = () => {
  let imageIndex = 0;

  const [currentProduct, setCurrentProduct] = useState({});
  const [quantityInputValue, setQuantityInputValue] = useState(1);
  const [sizeValue, setSizeValue] = useState("");

  const imageRef = useRef();

  const { id } = useParams();

  const { shopProducts } = useSelector((store) => store);
  const dispatch = useDispatch();

  const {
    collection,
    composition,
    description,
    name,
    price,
    images,
    wash,
  } = currentProduct;

  const mainImg = images && images[0];

  const priceFixed = price?.toFixed(2);

  const handleAdditionQuantityValue = (e) => {
    e.preventDefault();
    setQuantityInputValue((prevValue) => prevValue + 1);
  };

  const handleSubtractionQuantityValue = (e) => {
    e.preventDefault();
    setQuantityInputValue((prevValue) => prevValue - 1);
  };

  const handleOnChangeQuantityInput = (e) =>
    setQuantityInputValue(e.target.value);

  const handleOnChangeSize = (e) => setSizeValue(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!sizeValue) {
      alert("Please choose size");
      return;
    }
    dispatch(
      addProductToCart(quantityInputValue, sizeValue, {
        name,
        price,
        mainImg,
      })
    );
  };

  const handleNextImage = () => {
    if (imageIndex === images.length - 1) imageIndex = -1;
    imageIndex++;
    imageRef.current.src = images[imageIndex];
  };

  const handlePrevImage = () => {
    if (imageIndex === 0) imageIndex = images.length;
    imageIndex--;
    imageRef.current.src = images[imageIndex];
  };

  useEffect(() => {
    const element = shopProducts.filter((product) => product.id === Number(id));
    setCurrentProduct(...element);
  }, [id, shopProducts]);

  return (
    <Wrapper>
      <MainBox>
        <ImageBox>
          <ProductImg src={mainImg} ref={imageRef} />
          <PrevImgBtn onClick={handlePrevImage} />
          <NextImgBtn onClick={handleNextImage} />
        </ImageBox>

        <ProductDesctoption>
          <ProductCollection>{collection}</ProductCollection>
          <ProductName>{name}</ProductName>
          <ProductPrice>$ {priceFixed}</ProductPrice>
          <Form onSubmit={handleOnSubmit}>
            <FormHeading>Size</FormHeading>
            <SizesBox>
              <SizeInput
                type="radio"
                id="size_S"
                name="size"
                value="S"
                onChange={handleOnChangeSize}
              />
              <SizeLabel htmlFor="size_S">S</SizeLabel>

              <SizeInput
                type="radio"
                id="size_M"
                name="size"
                value="M"
                onChange={handleOnChangeSize}
              />
              <SizeLabel htmlFor="size_M">M</SizeLabel>

              <SizeInput
                type="radio"
                id="size_L"
                name="size"
                value="L"
                onChange={handleOnChangeSize}
              />
              <SizeLabel htmlFor="size_L">L</SizeLabel>
            </SizesBox>

            <FormHeading>Quantity</FormHeading>
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
            </QuantityBox>

            <AddToCartBtn type="submit">Add to Cart</AddToCartBtn>
          </Form>
        </ProductDesctoption>
      </MainBox>

      <Tabs composition={composition} description={description} wash={wash} />
    </Wrapper>
  );
};

export default DetailsItemView;

import React from "react";
import styled from "styled-components";

import Tabs from "components/Tabs";

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

const DetailsItemView = () => {
  return (
    <Wrapper>
      <MainBox>
        <ProductImg src="https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637" />

        <ProductDesctoption>
          <ProductCollection>Show me your Mumu</ProductCollection>
          <ProductName>Birdie Ruffle Dress</ProductName>
          <ProductPrice>$140.00</ProductPrice>
          <Form>
            <FormHeading>Size</FormHeading>
            <SizesBox>
              <SizeInput type="radio" id="size_S" name="size" />
              <SizeLabel htmlFor="size_S">S</SizeLabel>

              <SizeInput type="radio" id="size_M" name="size" />
              <SizeLabel htmlFor="size_M">M</SizeLabel>

              <SizeInput type="radio" id="size_L" name="size" />
              <SizeLabel htmlFor="size_L">L</SizeLabel>
            </SizesBox>

            <FormHeading>Quantity</FormHeading>
            <QuantityBox>
              <SubtractionBtn>−</SubtractionBtn>
              <QuantityInput type="number" />
              <AdditionBtn>+</AdditionBtn>
            </QuantityBox>

            <AddToCartBtn>Add to Cart</AddToCartBtn>
          </Form>
        </ProductDesctoption>
      </MainBox>

      <Tabs />
    </Wrapper>
  );
};

export default DetailsItemView;

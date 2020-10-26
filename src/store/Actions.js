export const SWITCH_SHOP_CART = "SWITCH_SHOP_CART";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export const switchShopCart = () => {
  return {
    type: SWITCH_SHOP_CART,
  };
};

export const addProductToCart = (quantity, size, productDetails) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      id: Math.random().toString(36).substr(2, 9),
      quantity,
      size,
      productDetails,
    },
  };
};

export const deleteProductFromCart = (id) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: {
      id,
    },
  };
};

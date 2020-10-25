import { SWITCH_SHOP_CART } from "store/Actions";

const initialState = {
  cartIsOpen: false,
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SHOP_CART:
      state.cartIsOpen = !state.cartIsOpen;
      return { ...state };
    default:
      return state;
  }
};

export default RootReducer;

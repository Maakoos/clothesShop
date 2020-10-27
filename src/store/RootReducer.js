import {
  SWITCH_SHOP_CART,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  EDIT_QUANTITY_VALUE,
} from "store/Actions";

const initialState = {
  cartIsOpen: false,
  shopCart: [],
  shopProducts: [
    {
      id: 1,
      collection: "Flynn Skye",
      name: "Mimi Romper",
      price: 159,
      description:
        "This girly and flirty romper from Flynn Skye features the brand's signature floral print throughout, scoop neckline with ruffled hem and keyhole detail, and ruffled shorts. The perfect piece for a day date!",
      wash: "Dry Clean Only",
      composition: "100% Rayon",
      images: [
        "https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-main_02_720x.jpg?v=1569128637",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-front-1_02_900x.jpg?v=1569128637",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-front_02_900x.jpg?v=1569128637",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/Mimi-romper-back_02_900x.jpg?v=1569128637",
      ],
    },
    {
      id: 2,
      collection: "Blue Life",
      name: "Rockstar Romper",
      price: 159,
      description:
        "Blue Life's new Rockstar Romper features a wrap front, flare sleeves with cascading ruffles and cutout shoulders, and a thick smocked waist with a layered skirt over shorts.",
      wash: "Dry Clean Only",
      composition: "100% Rayon",
      images: [
        "https://cdn.shopify.com/s/files/1/0245/6825/products/rockstar-romper-main_02_720x.jpg?v=1569128639",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/rockstar-romper-front_02_900x.jpg?v=1569128639",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/rockstar-romper-side_02_900x.jpg?v=1569128639",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/rockstar-romper-back_02_900x.jpg?v=1569128639",
      ],
    },
    {
      id: 3,
      collection: "Chaser",
      name: "One Heart Rainbow Tank",
      price: 59,
      description:
        "His retro tank from Chaser features a cotton burnout fabrication, colorful screen print graphic on the front, and crew neck tank top styling.",
      wash: "Machine Washable",
      composition: "100% Cotton",
      images: [
        "https://cdn.shopify.com/s/files/1/0245/6825/products/one-heart-main_02_720x.jpg?v=1569129509",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/one-heart-front_02_900x.jpg?v=1569129509",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/one-heart-back_02_900x.jpg?v=1569129509",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/one-heart-side_02_900x.jpg?v=1569129509",
      ],
    },
    {
      id: 4,
      collection: "Chaser",
      name: "Cropped Varsity Sweater",
      price: 136,
      description:
        "Cropped Varsity Sweater features a soft knit fabrication, an allover palm print, and a cropped relaxed fit.",
      wash: "Machine Washable",
      composition: "100% Polyester",
      images: [
        "https://cdn.shopify.com/s/files/1/0245/6825/products/cropped-varsity-sweater_02_720x.jpg?v=1569129558",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/cropped-varsity-sweater-side_02_900x.jpg?v=1569129558",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/cropped-varsity-sweater-front_02_900x.jpg?v=1569129558",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/cropped-varsity-sweater-back_02_900x.jpg?v=1569129558",
      ],
    },
    {
      id: 5,
      collection: "Show me your Mumu",
      name: "Daphne Dress",
      price: 162,
      description:
        "This fun and festive dress from Show Me Your Mumu features a stretch elastane fabrication with metallic thread contrast, mini swing skirt, and ruffled overlay neckline.",
      wash: "Dry Clean Only",
      composition: "87% Poly 7% Metallic 6% Elastane",
      images: [
        "https://cdn.shopify.com/s/files/1/0245/6825/products/daphne-dress-main_02_720x.jpg?v=1569129558",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/daphne-dress-front_02_900x.jpg?v=1569129558",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/daphne-dress-side_02_900x.jpg?v=1569129558",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/daphne-dress-back_02_900x.jpg?v=1569129558",
      ],
    },
    {
      id: 6,
      collection: "Blue Life",
      name: "Off Shoulder Smocking Dress",
      price: 150,
      description:
        "Blue Life's features an allover tie dye print on a super soft rayon fabrication, smocked bodice, and off the shoulder bell sleeves.",
      wash: "Dry Clean Only",
      composition: "87% Poly 7% Metallic 6% Elastane",
      images: [
        "https://cdn.shopify.com/s/files/1/0245/6825/products/off-shoulder-smocked-dress-main_02_720x.jpg?v=1569129511",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/off-should-smocked-dress-front_02_900x.jpg?v=1569129511",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/off-shoulder-smocked-dress-back_02_900x.jpg?v=1569129511",
        "https://cdn.shopify.com/s/files/1/0245/6825/products/off-shoulder-smocked-dress-side_02_900x.jpg?v=1569129511",
      ],
    },
  ],
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SHOP_CART:
      return { ...state, cartIsOpen: !state.cartIsOpen };
    case ADD_PRODUCT_TO_CART:
      const addedProduct = action.payload;
      return { ...state, shopCart: [...state.shopCart, addedProduct] };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        shopCart: [
          ...state.shopCart.filter((item) => item.id !== action.payload.id),
        ],
      };
    case EDIT_QUANTITY_VALUE:
      const newState = state;
      const index = newState.shopCart.findIndex(
        (el) => el.id === action.payload.id
      );
      const editedItem = newState.shopCart.splice(index, 1);
      if (action.payload.operation === "adding") {
        editedItem[0].quantity++;
      } else {
        editedItem[0].quantity--;
      }
      newState.shopCart.splice(index, 0, ...editedItem);

      return {
        ...state,
        shopCart: [...newState.shopCart],
      };
    default:
      return state;
  }
};

export default RootReducer;

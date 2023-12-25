import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, LOAD_PRODUCTS } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload),
      };
    }
    case LOAD_PRODUCTS: {
      return {
        ...state,
        products: action.payload
      };
    }
    default:
      return state;
  }
};

export default CartReducer;

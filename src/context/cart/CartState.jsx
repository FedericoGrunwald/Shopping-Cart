import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, LOAD_PRODUCTS } from "../Types";
import productsData from "./data";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
    products: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (_id) => {
    dispatch({ type: REMOVE_ITEM, payload: _id });
  };

  const loadProducts = (products) => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  };
  useEffect(() => {
    loadProducts(productsData);
  }, []); 

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        products: state.products,
        addToCart,
        showHideCart,
        removeItem,
        loadProducts
      }}
    >{children}</CartContext.Provider>
  );
};

export default CartState;

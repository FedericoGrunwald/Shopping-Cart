import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import FormatedPrice from "./FormatedPrice";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  return (
    <div>
      {showCart && (
        <div className="fixed top-14 right-5 z-10 border-solid border-gray-600 border-2 rounded-lg bg-white p-2">
          <div className="bg-white" style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer", backgroundColor: "white" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="">
            {cartItems.length === 0 ? (
              <h4 className="bg-white font-bold border-y-2 border-solid border-gray-500">
                Cart is Empty
              </h4>
            ) : (
              <ul className="bg-white">
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="flex justify-between mt-2 bg-slate-200 ">
            <div className="bg-slate-200 font-bold ">Cart Total</div>
            <div style={{ marginLeft: 5 }}>
              <FormatedPrice
                product={cartItems.reduce(
                  (amount, item) => item.price + amount,
                  0
                )}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import FormatedPrice from "./FormatedPrice";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <li className="border-b-2 border-solid border-gray-500 bg-slate-200 flex items-center justify-between rounded-lg mt-1">
      <img className="h-24 w-1/3 rounded-lg" src={item.image} alt="" />
      <div className="bg-slate-200">
        {item.name} <FormatedPrice product={item.price} />
      </div>
      <button className="border-orange-700 rounded-lg bg-orange-500 font-bold hover:bg-orange-400 p-1" onClick={() => removeItem(item._id)}>
        Remove
      </button>
    </li>
  );
}
export default CartItem;

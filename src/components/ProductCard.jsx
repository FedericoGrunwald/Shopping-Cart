import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import FormatedPrice from "./FormatedPrice";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext)

  return (
    <div className="relative top-24">
      <div className="w-96 p-3 border-solid border-2 border-orange-700 rounded-lg break-words shadow-xl bg-slate-200">
        <img className="object-cover shrink-1 w-full h-72 mb-6 rounded-xl" src={product.image} alt="" />
        <h4 className="bg-slate-200 font-bold">{product.name}</h4>
        <div className="mt-5 mb-0">
          <FormatedPrice product={product.price} />
        </div>
        <div className="mt-5">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <button
          className="pt-2 pb-2 w-1/3 cursor-pointer rounded-3xl bg-orange-500 border-none hover:bg-orange-600 hover:text-white ProductCard__button shadow-xl"
          onClick={() => addToCart(product)}
        >
          Add to basket
        </button>
      </div>
    
    </div>
    
  );
}

export default ProductCard;

import CartContext from "../context/cart/CartContext";
import { useContext, useState } from "react";

function Nav() {
  const { cartItems, showHideCart, products } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="relative z-10">
      <nav className="bg-orange-500 h-20 flex justify-between fixed w-full shadow-xl">
      <div className="bg-orange-500 w-24 flex justify-center items-center text-gray-950 font-bold">Store</div>
        <div className="bg-white rounded-full w-72 h-10 mt-4 shadow-xl">
          <input
            className="bg-white ml-4 mt-2 focus:outline-none" 
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <i className="fas fa-search bg-white w-4 h-4 rounded-full ml-14 mt-2" />
        </div>

      {searchTerm && (
        <div className="">
          <ul className="bg-white absolute top-16 left-1/3 w-40 h-auto border-2 border-solid border-gray-600 rounded-sm">
            {products
              .filter((product) =>
                product.name.toLowerCase().includes(searchTerm)
              )
              .map((product) => (
                <li className="bg-white hover:border-b-2 border-gray-600 flex justify-center" key={product._id}>
                  <div  className="bg-white m-1 cursor-pointer">
                    <img className="bg-white w-16 h-14 rounded-sm" src={product.image} alt={product.name} />
                    <p className="bg-white w-32 h-auto text-sm">{product.name}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}

      <div className="bg-orange-500 w-24 flex justify-end items-center mr-4">
        <div className="bg-orange-500">
          <i
            className="fa fa-shopping-cart bg-orange-500 cursor-pointer"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className="">
              <span className="bg-red-600 rounded-full flex justify-center items-center w-4 h-4 font-bold absolute top-4 right-2 text-sm">{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
    </div>
    
  );
}
export default Nav;

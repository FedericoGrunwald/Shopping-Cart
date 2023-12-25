import products from "../context/cart/data";
import ProductCard from "../components/ProductCard";

function HomeScreen() {
  const prod = products.map((product) => {
    return (
      <div key={product._id}>
        <ProductCard product={product} />
      </div>
    );
  });
  return (
    <div className="flex flex-wrap justify-evenly gap-2">
      {prod}
    </div>
  );
}
export default HomeScreen;

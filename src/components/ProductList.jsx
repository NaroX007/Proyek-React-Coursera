import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  { id: 1, name: "Snake Plant", price: 10, category: "Indoor" },
  { id: 2, name: "Aloe Vera", price: 12, category: "Indoor" },
  { id: 3, name: "Palm", price: 15, category: "Outdoor" },
  { id: 4, name: "Rose", price: 8, category: "Outdoor" },
  { id: 5, name: "Cactus", price: 9, category: "Succulent" },
  { id: 6, name: "Succulent Mix", price: 14, category: "Succulent" },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <h2>Our Plants</h2>
      {plants.map((p) => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>${p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </>
  );
}

export default ProductList;

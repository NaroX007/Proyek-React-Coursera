import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plantCategories = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 10 },
    { id: 2, name: "Aloe Vera", price: 12 },
    { id: 3, name: "Peace Lily", price: 14 },
    { id: 4, name: "Spider Plant", price: 11 },
    { id: 5, name: "ZZ Plant", price: 13 },
    { id: 6, name: "Pothos", price: 9 },
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 8 },
    { id: 8, name: "Palm", price: 15 },
    { id: 9, name: "Hibiscus", price: 10 },
    { id: 10, name: "Bougainvillea", price: 12 },
    { id: 11, name: "Jasmine", price: 9 },
    { id: 12, name: "Sunflower", price: 7 },
  ],
  Succulent: [
    { id: 13, name: "Cactus", price: 6 },
    { id: 14, name: "Echeveria", price: 8 },
    { id: 15, name: "Haworthia", price: 9 },
    { id: 16, name: "Aloe Mini", price: 7 },
    { id: 17, name: "Sedum", price: 6 },
    { id: 18, name: "Crassula", price: 10 },
  ],
};

function ProductList() {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <h2>Our Plants</h2>

      {Object.entries(plantCategories).map(([category, plants]) => (
        <div key={category}>
          <h3>{category}</h3>

          {plants.map((plant) => (
            <div key={plant.id}>
              <p>
                {plant.name} - ${plant.price}
              </p>
              <button onClick={() => dispatch(addItem(plant))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default ProductList;

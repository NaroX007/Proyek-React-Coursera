import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price}
          </p>
          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, amount: -1 }))
            }
          >
            -
          </button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ${calculateTotalAmount()}</h3>

      <button>Checkout (Coming Soon)</button>
      <br />
      <Link to="/plants">Continue Shopping</Link>
    </>
  );
}

export default CartItem;

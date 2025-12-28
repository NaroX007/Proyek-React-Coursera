import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const total = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">Cart ({total})</Link>
    </nav>
  );
}

export default Navbar;

import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log({ cart });
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{cart.amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

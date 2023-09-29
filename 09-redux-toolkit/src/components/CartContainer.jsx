import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { openModal } from "../features/modalSlice";

const CartContainer = () => {
  const { amount, items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>{
            dispatch(openModal());
            // dispatch(clearCart());
        }}>clear cart</button>
      </footer>
    </section>
  );
};
export default CartContainer;

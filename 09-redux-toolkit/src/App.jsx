import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, fetchCartItems } from "./features/cartSlice";
import Modal from "./components/Modal";


function App() {
  const {items, isLoading} = useSelector(state => state.cart);
  const {isOpen} = useSelector(state => state.modal);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotals());
  }, [items]);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;

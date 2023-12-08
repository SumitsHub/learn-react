import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';

function Homelayout() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-elements py-20">
        <Outlet />
      </section>
    </>
  );
}
export default Homelayout;

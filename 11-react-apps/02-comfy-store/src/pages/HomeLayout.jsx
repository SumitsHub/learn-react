import { Outlet } from 'react-router-dom';
import { Header } from '../components';

function Homelayout() {
  return (
    <>
      <Header />
      <section className="align-elements py-20">
        <Outlet />
      </section>
    </>
  );
}
export default Homelayout;

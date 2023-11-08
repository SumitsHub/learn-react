import { useState } from 'react';
import './Navbar.css';
import BarsIcon from './assets/bars-solid.svg';
import Logo from './assets/joomla.svg';

const LOGO =
  'https://png.pngtree.com/png-vector/20200925/ourmid/pngtree-whats-app-pink-icon-vector-png-image_2351874.jpg';
const menus = ['Menu #1', 'Menu #2', 'Menu #3', 'Menu #4'];
const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
        <img
          src={BarsIcon}
          alt="bars"
          onClick={() => setIsShowMenu(prev => !prev)}
          className={`${
            isShowMenu ? 'rotate-90 duration-100' : 'duration-100'
          }`}
        />
      </div>
      <div className="menu-items">
        <ul className={`${isShowMenu ? 'show' : 'hide'}`}>
          {menus.map((menu, index) => {
            return <li key={index}>{menu}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

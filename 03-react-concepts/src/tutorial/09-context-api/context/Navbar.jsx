import { createContext, useContext, useState } from 'react';

export const { Provider, Consumer } = createContext();
// createContext -> returns two components
// Provider - wrap return in Parent Component
// Consumer - replaced by useContext() hook

// creating custom hook to useContext, so that we don't need to import useContext hook and NavbarContext

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </Provider>
  );
};
export default Navbar;

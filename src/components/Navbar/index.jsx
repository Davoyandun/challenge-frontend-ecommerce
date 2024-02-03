import { Logo } from "../../assets/Logo";
import { CartLogo } from "../../assets/CartLogo";
import { Search } from "./Search";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Navbar() {
  const { obtainTotalItems, setIsOpen } = useContext(CartContext);

  return (
    <div className="NavbarContainer">
      <Logo />
      <Search />
      <button className="CartButton" onClick={() => setIsOpen((prev) => !prev)}>
        <CartLogo />
        <p>{obtainTotalItems() > 0 ? obtainTotalItems() : ""}</p>
      </button>
    </div>
  );
}

export { Navbar };

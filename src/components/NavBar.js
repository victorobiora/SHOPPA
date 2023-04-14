import classes from "../styles/NavBar.module.css";
import CartOverlay from "./CartOverlay";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import cartImage from '../styles/shopping-cart.png'

const NavBar = (props) => {
  const cart = useSelector((state) => state.cart.cartItems);
  const itemsinCart = cart.length;

  const [showBackdrop, setShowBackdrop] = useState(false);

  const removeBackdropHandler = () => {
    setShowBackdrop(false);
  };

  const showCartHandler = () => {
    setShowBackdrop(true);
  };
  return (
    <div className={classes.nav}>
      <div className={classes.homeLink}>
        <a href="/">SHOPPA</a>
      </div>
      <div className={classes.deets}>
        <a href="/"> NewsLetter </a>
        <a href="/"> Login </a>
        <div className={classes.cartContainer} onClick={showCartHandler}>
          <img src={cartImage} alt="cart" />
        </div>
        <span onClick={showCartHandler}>
          <h5>{itemsinCart}</h5>
        </span>
      </div>
      {showBackdrop && (
        <CartOverlay onClose={removeBackdropHandler}>
          <Cart />
        </CartOverlay>
      )}
    </div>
  );
};

export default NavBar;

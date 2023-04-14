import CartCheckout from "./cartCheckout";
import CartItem from "./CartItem";
import classes from "../styles/CartItem.module.css";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
 
  return (
    <div>
      <div className={classes.cartItemContainer}>
        <div className={classes.itemHeadings}>
          <div>
            <h4>Item</h4>
          </div>
          <div>
            <h4>Amount</h4>
          </div>
          <div></div>
          <div className={classes.shift}>
            <h4>Total</h4>
          </div>
          <div>
            <h4>Delete</h4>
          </div>
        </div>
        {cartItems.map((el) => (
          <CartItem
            key={el.itemId}
            id={el.itemId}
            name={el.itemName}
            image={el.itemImage}
            price={el.itemPrice}
            amount={el.itemTotalAmount}
            totalPrice={el.itemTotalPrice}
          />
        ))}
      </div>
      <CartCheckout />
    </div>
  );
};

export default Cart;

import classes from "../styles/CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/redux-store";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const increaseHandler = (el) => {
    dispatch(
      cartActions.addtoCart({ itemId: props.id, itemPrice: +props.price })
    );
  };
  const decreaseHandler = (el) => {
    dispatch(
      cartActions.deletefromCart({ itemId: props.id, itemPrice: +props.price })
    );
  };

  const removeItemHandler = (el) => {
    dispatch(
      cartActions.deletefromCart({ itemId: props.id, message: "delete" })
    );
  };

  return (
    <section className={classes.container}>
      <div className={classes.details}>
        <div className={classes.item}>
          <div className={classes.itemImage}>
            <img src={props.image} alt="itemImage" />
          </div>
          <div className={classes.itemText}>
            <div className={classes.itemName}>
              <p>{props.name}</p>
            </div>
            <div className={classes.itemPrice}>
              <h4>${props.price}</h4>
            </div>
          </div>
        </div>
        <div className={classes.itemDetails}>
          <div className={classes.amount}>
            <h4>x{props.amount}</h4>
          </div>
          <div className={classes.calcAmount}>
            <div onClick={increaseHandler}>+</div>
            <div onClick={decreaseHandler}>-</div>
          </div>
          <div className={classes.itemTotal}>
            <h4>${props.totalPrice}</h4>
          </div>
          <div className={classes.delete} onClick={removeItemHandler}>x</div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;

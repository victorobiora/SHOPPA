import classes from '../styles/CartCheckout.module.css'
import { cartActions } from '../store/redux-store';
import { useDispatch, useSelector} from 'react-redux';

const CartCheckout = props => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)

    const calcTotalPrice = () => {
        if(cartItems.length === 0){
            return 0
        }else if(cartItems.length === 1){
            return parseFloat(cartItems[0].itemTotalPrice.toFixed(2))
        }else{
            const totalPrice = cartItems.reduce((acc, cur) => {
          return acc + cur.itemTotalPrice;
        }, 0);
      
        return parseFloat(totalPrice.toFixed(2)) 
        }
    }
    
  const clearCart = el => {
    el.preventDefault()
    dispatch(cartActions.clearCart())
  }
    return (
        <section className={classes.checkoutContainer}>
            <div className={classes.cartTotal}>
                <h4>Cart Total</h4>
                <div>${calcTotalPrice()}</div>
            </div>
            <div className={classes.buttons}>
                <button className={classes.checkOutButton}>Checkout</button>
                <button className={classes.clearCartButton} onClick={clearCart}>Clear Cart</button>
            </div>
           
        </section>
    )
}

export default CartCheckout;
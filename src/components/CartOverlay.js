import { Fragment } from 'react';
import classes from './CartOverlay.module.css'

const Backdrop = props => {
 return <div className= {classes.backdrop} onClick = {props.onClose}></div>
}
const CartView = props => {
    return (
     <div className = {classes.modal}>
     <div className = {classes.content}>{props.children}</div>
   </div>
    )
} 

const CartOverlay = props => {
    return <Fragment>
       <Backdrop  onClose= {props.onClose}/>
       <CartView>{props.children}</CartView>
    </Fragment>
 };    


 export default CartOverlay;
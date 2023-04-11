import classes from '../styles/NavBar.module.css'
import cart from '../styles/shopping-cart.png'

const NavBar = props => {
    return <div className={classes.nav}>
          <div className={classes.homeLink} >
            <a href="/">SHOPPA</a>
          </div>
          <div className={classes.deets}>
          <a href="/"> NewsLetter </a>
          <a href="/"> Login </a>
         <div className={classes.cartContainer}>
            <img src={cart} alt='cart'/>
            </div>
          </div>
    </div>
}

export default NavBar;
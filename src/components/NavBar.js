import classes from '../styles/NavBar.module.css'

const NavBar = props => {
    return <div className={classes.nav}>
          <div className={classes.homeLink} >
            <a href="/">SHOPPA</a>
          </div>
          <div className={classes.deets}>
          <a href="/"> NewsLetter </a>
          <a href="/"> Login </a>
          <a href="/"> About Us </a>
          </div>
    </div>
}

export default NavBar;
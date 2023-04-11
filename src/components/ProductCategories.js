import classes from '../styles/ProductCategories.module.css'
import { Link } from 'react-router-dom'

const ProductCategories = props => {

   return <Link to ={props.name} className= {classes.container}>
    <div className = {classes.imageContainer}>
        <img src={props.image} alt= {props.name}/>
    </div>
    <div className={classes.name}>{props.name}</div>
   </Link>
}

export default ProductCategories;
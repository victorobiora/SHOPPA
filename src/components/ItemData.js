import classes from '../styles/ItemData.module.css'
import { Link } from 'react-router-dom'

export const imgLink = 'https://www.cnet.com/a/img/resize/887997d313cda859afd73f96615c96a51338a5ca/hub/2020/10/18/bdb7ea97-cb99-48d8-a69c-38d26109f33b/05-iphone-12-pro-2020.jpg?auto=webp&fit=crop&height=900&width=1200'
const ItemData = props => {

    const route = `/:productsList/${props.id}`
    
    return <Link to ={route} className={classes.container}>
        <div className={classes.image}>
            <img src={props.image} alt={props.name}/>
        </div>
        <section className={classes.itemDetails}>
            <div>{props.name}</div>
            <h4>${props.price}</h4>
        </section>
    </Link>
    
}

export default ItemData;
import classes from '../styles/ItemData.module.css'

export const imgLink = 'https://www.cnet.com/a/img/resize/887997d313cda859afd73f96615c96a51338a5ca/hub/2020/10/18/bdb7ea97-cb99-48d8-a69c-38d26109f33b/05-iphone-12-pro-2020.jpg?auto=webp&fit=crop&height=900&width=1200'
const ItemData = props => {
    return <div className={classes.container}>
        <div className={classes.image}>
            <img src={imgLink} alt="iPhone"/>
        </div>
        <section className={classes.itemDetails}>
            <div>iPhone 12</div>
            <div>$32.00</div>
            <div>****</div>
        </section>
        <div className={classes.addToCart}>+</div>
    </div>
}

export default ItemData;
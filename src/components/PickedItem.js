import { imgLink } from "./ItemData";
import classes from "../styles/PickedItem.module.css";

const PickedItem = (props) => {
  return (
    <div>
      <div className={classes.container}>
        <section className={classes.pickedItemImage}>
          <img src={imgLink} alt="pickedItem" />
        </section>

        <section className={classes.pickedItemDetails}>
          <div>
            <h1> iPhone 12</h1>
          </div>
          <div>****</div>
          <div>
            <h2>$32.00</h2>
          </div>
          <button className={classes.addCart}> Add to Cart + </button>
        </section>
      </div>
      <section className={classes.itemText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nisi
        aliquam a repellendus tempore ab consequuntur itaque qui. Error, dolore.
        Commodi enim vitae veniam, aperiam vero illo corporis error
        perspiciatis.
      </section>
    </div>
  );
};

export default PickedItem;

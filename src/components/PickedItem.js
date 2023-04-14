import classes from "../styles/PickedItem.module.css";
import { fetchObject } from "../store/getToken";
import { useLoaderData } from "react-router-dom";

const PickedItem = (props) => {
  const item = useLoaderData();

  return (
    <div>
      <div className={classes.container}>
        <section className={classes.pickedItemImage}>
          <img src={item.image.imageUrl} alt="pickedItem" />
        </section>

        <section className={classes.pickedItemDetails}>
          <div>
            <h1>{item.title}</h1>
          </div>
          <div>{item.condition}</div>
          <div>
            <h2>${item.price.value}</h2>
          </div>
        </section>
      </div>
      <section className={classes.itemText}>{item.shortDescription}</section>
      <button className={classes.addCart}> Add to Cart + </button>
    </div>
  );
};

export default PickedItem;

export const loader = async ({ request, params }) => {
  const id = params.pickedProduct;

  const getItem = await fetch(
    `https://api.ebay.com/buy/browse/v1/item/${id}`,
    fetchObject
  );

  if (!getItem.ok) {
    console.log("I didnt get the item");
  }

  const item = await getItem.json();

  return item;
};

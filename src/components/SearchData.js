import ProductCategories from "./ProductCategories";
import classes from "../styles/SearchData.module.css";
import { initialCatList } from "../store/initialCatList";
import { useActionData, useSubmit, Form } from "react-router-dom";
import { useState } from "react";
import { fetchObject } from "../store/getToken";
import ItemData from "./ItemData";

const SearchData = (props) => {
  const submit = useSubmit();
  const searchActionData = useActionData();
  const [searchQuery, setSearchQuery] = useState("");
  const [isEmpty, SetIsEmpty] = useState(null);
  const className = `${classes.categoriesList} ${classes.addWidth}`
  const updateSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length === 0) {
      SetIsEmpty(true);
    } else {
      SetIsEmpty(null);
      submit(
        {
          value: searchQuery,
        },
        {
          method: "POST",
        }
      );
    }
  };

  return (
    <>
      <Form method="post" className={classes.form}>
        <div className={classes.searchInput}>
          <input
            type="text"
            name="searchitem"
            placeholder="search for product"
            id={props.key}
            onChange={updateSearchQuery}
          />
          {isEmpty && (
            <div className={classes.warning}>search box can not be empty</div>
          )}
        </div>
        <button onClick={searchHandler}> search</button>
      </Form>
      <div className={classes.categoriesText}>
        <h2>
         Search through our Popular categories 
        </h2>
      </div>
      {!searchActionData && (
        <section className={classes.categoriesList}>
          {initialCatList.map((el) => (
            <ProductCategories name={el.name} image={el.image} key={el.name} />
          ))}
        </section>
      )}
      {searchActionData && <section className={className}>
      {searchActionData.map((el) => (
        <ItemData
          key={el.itemId}
          image={el.image.imageUrl}
          price={el.price.value}
          name={el.title}
          id = {el.itemId}
        />
      ))}
        </section>}
    </>
  );
};

export default SearchData;

export const searchAction = async ({ request, params }) => {
  const data = await request.formData();

  const query = data.get("value");
  console.log(query);

  const getItem = await fetch(
    `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${query}&limit=12&filter=priceCurrency:USD,conditions:{NEW}`,
    fetchObject
  );

  if (!getItem.ok) {
    console.log("I didnt get the item");
  }

  const item = await getItem.json();

  return item.itemSummaries;
};

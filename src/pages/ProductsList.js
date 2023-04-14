import getToken from "../store/getToken";
import { useLoaderData } from "react-router-dom";
import ItemData from "../components/ItemData";

const ProductsList = (props) => {
  const productData = useLoaderData();

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingTop: "3rem",
      }}
    >
      {productData.map((el) => (
        <ItemData
          key={el.itemId}
          image={el.image.imageUrl}
          price={el.price.value}
          name={el.title}
          id = {el.itemId}
        />
      ))}
      ;
    </section>
  );
};

export default ProductsList;

export const ProductsListLoader = async ({ request, params }) => {

  const token = getToken();

  const setPriceRangs = (arg) => {
    const products = {
      Sneakers: "100..100000",
      Phones: "100..5000",
      Laptops: "500..20000",
      Wristwatches: "10..20000",
    };
    let productPrice = 0;
    for (const p in products) {
      if (p === arg) {
        productPrice = products[p];
      }
    }
    return productPrice;
  };
 
  const requestP = await fetch(
    `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${
      params.productsList
    }&limit=20&filter=price:[${setPriceRangs(
      params.productsList
    )}],priceCurrency:USD,conditions:{NEW}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        "X-EBAY-C-ENDUSERCTX":
          "affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId></referenceId>",
      },
    }
  );

  if (!requestP.ok) {
    console.log("data not fetched");
  }

  const gottenData = await requestP.json();

  return gottenData.itemSummaries;
};

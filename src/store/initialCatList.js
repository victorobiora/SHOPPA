import { fetchObject } from "./getToken";

export const initialCatList = [
  {
    name: "Sneakers",
    image:
      "https://i.pinimg.com/originals/e9/86/ed/e986ed07ff20baeaac4bbf7018271fcc.jpg",
  },
  {
    name: "Phones",
    image:
      "https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/gallery_adv/public/2022/09/apple_iphone_14_review_0.jpg?itok=_YNJI_IY",
  },
  {
    name: "Laptops",
    image:
      "https://techuda.com/wp-content/uploads/2022/03/dell_alienware_x14_2022-2-e1647544626394.jpg",
  },
  {
    name: "Wristwatches",
    image:
      "https://www.komback.com/wp-content/uploads/2020/08/4B91A9D5-43C6-4FA2-871F-098B66A04347.jpg",
  },
];

export const searchThunk = (query) => {
  return async (dispatch) => {
    const searchRequest = fetch(
      `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${
        query
      }&limit=20&filter=priceCurrency:USD,conditions:{NEW}`,
      fetchObject
    );

    if(!searchRequest.ok){

    }
    dispatch("");
  };
};

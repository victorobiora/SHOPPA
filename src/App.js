import "./App.css";
import IndexDisplay from "./pages/IndexDisplay";
import ProductsList from "./pages/ProductsList";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Overlay from "./pages/Overlay";
import Product from "./pages/product";
import { ProductsListLoader } from "./pages/ProductsList";
import { loader as productLoader } from "./components/PickedItem";
import { searchAction } from "./components/SearchData";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Overlay />,
      children: [
        { index: true, element: <IndexDisplay />, action: searchAction },
        {
          path: ":productsList",
          children: [
            {
              index: true,
              element: <ProductsList />,
              loader: ProductsListLoader,
            },
            {
              path: ":pickedProduct",
              element: <Product />,
              loader: productLoader,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

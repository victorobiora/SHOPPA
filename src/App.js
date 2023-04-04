import './App.css';
import IndexDisplay from './pages/IndexDisplay';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Overlay from './pages/Overlay';
import Product from './pages/product';
import { useSelector } from 'react-redux';

function App() {


  const r = useSelector(state => state)
  console.log(r)

  const router = createBrowserRouter([
    {path: '/', element: <Overlay/> , children:[
      {index: true , element: <IndexDisplay/>},
      {path: ':product', element: <Product/>}
    ]}
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

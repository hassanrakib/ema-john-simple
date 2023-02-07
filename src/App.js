import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoaders } from "./loaders/productsAndCartLoaders";
import Orders from "./components/Orders/Orders";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Shop />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: productsAndCartLoaders,
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoaders } from "./loaders/productsAndCartLoaders";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";


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
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
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

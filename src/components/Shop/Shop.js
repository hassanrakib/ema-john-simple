import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
export default function Shop() {
  const [cart, setCart] = useState([]);
  // set products
  const [products, setProducts] = useState([]);
  // number of products
  const [count, setCount] = useState(0);
  // show 10 products per page by default
  const [productsPerPage, setProductsPerPage] = useState(10);
  // for first page => current page index by default 0
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  // calculate the number of pages for products
  const totalPages = Math.ceil(count / productsPerPage);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPageIndex}&size=${productsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);

        // number of data
        setCount(data.count);
      });
  }, [currentPageIndex, productsPerPage]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const storedCartLength = Object.keys(storedCart).length;
    const savedCart = [];

    if (products.length && storedCartLength) {
      for (const id in storedCart) {
        const addedProduct = products.find((product) => product._id === id);
        if (addedProduct) {
          addedProduct.quantity = storedCart[id];
          savedCart.push(addedProduct);
        }
      }
      setCart(savedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart;
    const productAlreadyInCart = cart.find(
      (productInCart) => productInCart._id === product._id
    );
    if (productAlreadyInCart) {
      productAlreadyInCart.quantity += 1;
      const restProducts = cart.filter(
        (productInCart) => productInCart._id !== product._id
      );
      newCart = [...restProducts, productAlreadyInCart];
    } else {
      product.quantity += 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    // add to localStorage
    addToDb(product._id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product._id}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/orders">
            <button>Review Orders</button>
          </Link>
        </Cart>
      </div>

      {/* pagination */}
      <div className="pagination">
        <p>Current Page Index: {currentPageIndex}, Products Per Page: {productsPerPage}</p>
        {[...Array(totalPages).keys()].map((index) => (
          <button
          key={index} 
          onClick={() => setCurrentPageIndex(index)}
          className={currentPageIndex === index && "selected"}
          >
            {index + 1}
          </button>
        ))}

        {/* select the number of products per page */}
        <select value={productsPerPage} onChange={(e) => setProductsPerPage(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}

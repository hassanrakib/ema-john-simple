import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const storedCartLength = Object.keys(storedCart).length;
    const savedCart = [];

    if (products.length && storedCartLength) {
      for (const id in storedCart) {
        const addedProduct = products.find((product) => product.id === id);
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
    const productAlreadyInCart = cart.find(productInCart => productInCart.id === product.id);
    if (productAlreadyInCart) {
      productAlreadyInCart.quantity += 1;
      const restProducts = cart.filter(productInCart => productInCart.id !== product.id);
      newCart = [...restProducts, productAlreadyInCart];
    } else {
      product.quantity += 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    // add to localStorage
    addToDb(product.id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart()
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/orders"><button>Review Orders</button></Link>
        </Cart>
      </div>
    </div>
  );
}

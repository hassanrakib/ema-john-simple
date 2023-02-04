import { useEffect, useState } from "react";
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

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

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
        <h4>This is shop container</h4>
        <p>Selected Items: {cart.length} </p>
      </div>
    </div>
  );
}

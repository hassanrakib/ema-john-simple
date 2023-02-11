import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

export default function Orders() {
    const { savedCart } = useLoaderData();
    // initial cart is the saved cart
    const [cart, setCart] = useState(savedCart);
    const deleteOrderItem = (deleteItemId) => {
        const restItems = cart.filter(product => product.id !== deleteItemId);
        removeFromDb(deleteItemId);
        setCart(restItems);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
      }
    return (
        <div className="shop-container">
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem deleteOrderItem={deleteOrderItem} key={product.id} product={product} />)
                }
                {
                    cart.length === 0 && <h1>No items to review! Please <Link to="/shop">Shop.</Link></h1>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart} />
            </div>
        </div>
    )
}
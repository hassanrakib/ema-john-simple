import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

export default function Orders() {
    const {products, savedCart} = useLoaderData();
    // initial cart is the saved cart
    const [cart, setCart] = useState(savedCart);
    return (
        <div className="shop-container">
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    )
}
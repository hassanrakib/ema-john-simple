import "./Cart.css";

export default function Cart({ cart, clearCart, children }) {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }
  const tax = totalPrice * 0.1;
  const roundedTax = (Math.round(tax * 1000) / 1000).toFixed(2);

  const grandTotal = (totalPrice + totalShipping + parseFloat(roundedTax)).toFixed(2);
  return (
    <div className="cart">
      <h4>Order Summary:</h4>
      <p>Selected Items: {quantity} </p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${roundedTax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
      <button onClick={clearCart}>Delete Cart</button>
      <div>
        {children}
      </div>
    </div>
  );
}

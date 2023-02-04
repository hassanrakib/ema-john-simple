import "./Cart.css";

export default function Cart({ cart }) {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice += product?.price;
    totalShipping += product?.shipping;
  }
  const tax = totalPrice * 0.1;
  const roundedTax = (Math.round(tax * 1000) / 1000).toFixed(2);

  const grandTotal = (totalPrice + totalShipping + parseFloat(roundedTax)).toFixed(2);
  return (
    <div className="cart">
      <h4>Order Summary:</h4>
      <p>Selected Items: {cart.length} </p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${roundedTax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
    </div>
  );
}

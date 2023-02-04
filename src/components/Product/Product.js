import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Product({ product, handleAddToCart }) {
  const { name, img, seller, price, ratings, stock } = product;

  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <span className="btn-text">Add to Cart</span>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
}

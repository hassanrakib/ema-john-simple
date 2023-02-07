import "./ReviewItem.css";
export default function ReviewItem({ product }) {
    const { name, price, quantity, img } = product;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt="item" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: ${quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}
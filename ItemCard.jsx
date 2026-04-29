import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  // Calculate discounted price if discount exists
  const discountedPrice = item.discountPercentage 
    ? (item.price - (item.price * item.discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://via.placeholder.com/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      
      // ADD DISPLAY FOR DISCOUNT 
      <p><strong>Original Price:</strong> ${item.price}</p>
      {item.discountPercentage > 0 ? (
        <>
          <p><strong>Discount:</strong> {item.discountPercentage}% OFF</p>
          <p><strong>Discounted Price:</strong> ${discountedPrice}</p>
        </>
      ) : (
        <p><strong>Discount:</strong> No discount</p>
      )}
      
      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
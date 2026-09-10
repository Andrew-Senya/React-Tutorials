import { useState } from "react";

function MySubComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Pick up");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };
  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      <div>
        <h3>NAME: {name}</h3>
        <input
          value={name}
          type="text"
          placeholder="Enter your name here"
          onChange={handleNameChange}
        />
      </div>
      <div>
        <h3>Quantity: {quantity}</h3>
        <input
          value={quantity}
          type="text"
          placeholder="how many"
          onChange={handleQuantityChange}
        />
      </div>
      <div>
        <p>Comment: {comment}</p>
        <textarea
          value={comment}
          type="text"
          placeholder="how many"
          onChange={handleCommentChange}
        />
      </div>
      <div>
        <p>Payment: {payment}</p>
        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Master Card">Master Card</option>
          <option value="Visa Card">Visa Card</option>
        </select>
      </div>
      <div>
        <label>
          <input
            value="Pick Up"
            type="radio"
            checked={shipping === "Pick up"}
            onChange={handleShippingChange}
          />
          Pick Up
        </label>
        <br />
        <label>
          <input
            value="Delivery"
            type="radio"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
        <h3>Shipping: {shipping}</h3>
      </div>
    </div>
  );
}

export default MySubComponent;

import React from "react";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default CheckoutItem;

import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import "./CartItem.scss";

const CartItem = ({ item, clearItemFromCart }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="CartItem">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name} -</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <div
          className="remove-from-cart"
          onClick={() => clearItemFromCart(item)}
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { clearItemFromCart })(CartItem);

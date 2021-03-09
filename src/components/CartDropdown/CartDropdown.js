import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="CartDropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <button>Checkout</button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);

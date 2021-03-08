import React from "react";
import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="CartDropdown">
      <div className="cart-items"></div>
      <button>Checkout</button>
    </div>
  );
};

export default CartDropdown;

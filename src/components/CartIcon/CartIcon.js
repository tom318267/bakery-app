import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden} className="CartIcon">
      <i className="fas fa-shopping-cart"></i>
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);

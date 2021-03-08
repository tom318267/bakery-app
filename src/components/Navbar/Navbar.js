import React from "react";
import { Link } from "react-router-dom";
import cupcake from "../../assets/cupcake.png";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import "./Navbar.scss";

const Navbar = ({ currentUser, hidden }) => {
  return (
    <div className="Navbar">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img src={cupcake} alt="cupcake" />
          </Link>
          <Link href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/items">Menu</Link>
            </li>
            <li>
              <a href="collapsible.html">Contact</a>
            </li>
            <li>
              {currentUser ? (
                <Link onClick={() => auth.signOut()}>Sign Out</Link>
              ) : (
                <Link to="/sign-up">Sign Up</Link>
              )}
            </li>

            <CartIcon />
          </ul>
        </div>
        {hidden ? null : <CartDropdown />}
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser: currentUser,
  hidden,
});

export default connect(mapStateToProps)(Navbar);

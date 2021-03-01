import React, { Component } from "react";
import BAKERY_DATA from "../../BakeryData";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import "./BakeryItems.scss";

class BakeryItems extends Component {
  state = {
    items: BAKERY_DATA,
  };
  render() {
    const { items } = this.state;
    return (
      <div className="BakeryItems">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionPreview key={id} {...otherItemProps} />
          ))}
      </div>
    );
  }
}

export default BakeryItems;

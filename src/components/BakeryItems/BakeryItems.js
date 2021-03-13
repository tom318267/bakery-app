import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollections } from "../../redux/shop/shop.selectors";
import "./BakeryItems.scss";

const BakeryItems = ({ collections }) => {
  return (
    <div className="BakeryItems">
      {collections
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionPreview key={id} {...otherItemProps} />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(BakeryItems);

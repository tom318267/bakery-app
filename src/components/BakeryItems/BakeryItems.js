import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./BakeryItems.scss";

const BakeryItems = ({ collections }) => {
  return (
    <div className="BakeryItems">
      {collections.map(({ id, ...otherItemProps }) => (
        <CollectionPreview key={id} {...otherItemProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(BakeryItems);

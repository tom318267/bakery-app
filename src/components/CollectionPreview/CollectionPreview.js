import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="CollectionPreview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

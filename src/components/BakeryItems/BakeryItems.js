import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import Spinner from "../Spinner/Spinner";
import "./BakeryItems.scss";

const BakeryItems = ({ collections, updateCollections }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="BakeryItems">
      {collections.map(({ id, ...otherItemProps }) => (
        <CollectionPreview isLoading={loading} key={id} {...otherItemProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, { updateCollections })(BakeryItems);

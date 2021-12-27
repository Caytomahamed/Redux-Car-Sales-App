import React from "react";
import { useSelector } from "react-redux";

import AddedFeature from "./AddedFeature";

const AddedFeatures = (props) => {
  const features = useSelector((s) => s.carReducer.car.features);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map((item) => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;

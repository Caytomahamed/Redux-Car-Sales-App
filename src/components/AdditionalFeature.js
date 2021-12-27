import React from 'react';
import { useDispatch } from "react-redux";
import { addFeature } from "../action/carAction";

const AdditionalFeature = props => {
    const dispatch = useDispatch();
  const add = (e) => {
    dispatch(addFeature(e));
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => add(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

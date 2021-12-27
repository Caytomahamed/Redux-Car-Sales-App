import React from 'react';
import { useDispatch } from "react-redux";
import { removeFeature } from "../action/carAction";

const AddedFeature = props => {
   const dispatch = useDispatch();

   const remove = (e) => {
     dispatch(removeFeature(e));
   };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => remove(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

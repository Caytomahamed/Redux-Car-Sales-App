import React from 'react';
import { useSelector } from "react-redux";
const Total = props => {
  const state = useSelector((s) => s.carReducer);
  return (
    <div className="content">
      <h4>Total Amount: ${state.car.price + state.additionalPrice}</h4>
    </div>
  );
};

export default Total;

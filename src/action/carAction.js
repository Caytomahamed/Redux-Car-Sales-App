//Action TYpe
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//Action Creater

export const addFeature = (newFeature) => {
  return {
    type: ADD_FEATURE,
    payload: newFeature,
  };
};

export const removeFeature = (removeFeature) => {
  return {
    type: REMOVE_FEATURE,
    payload: removeFeature,
  };
};

import { ADD_FEATURE, REMOVE_FEATURE } from "../action/carAction";

const init = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const carReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      //get feature
      const item = state.additionalFeatures.find(
        (i) => i.id === action.payload.id
      );
      let price = state.additionalPrice + action.payload.price;
      console.log("price", price);
      //get check if is in all ready or no
      return {
        ...state,
        additionalPrice: price,
        car: {
          ...state.car,
          features: [...state.car.features, { ...item, id: Date.now() }],
        },
      };

    case REMOVE_FEATURE:
      //get feature
      let price2 = state.additionalPrice - action.payload.price;
      console.log("price", price2);
      //get check if is in all ready or no
      return {
        ...state,
        additionalPrice: price2,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (i) => i.id !== action.payload.id
          ),
        },
      };
    default:
      return state;
  }
};

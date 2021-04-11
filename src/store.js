import { createStore } from "redux";
import tourList from "./tripList";

const initailState = {
  data: tourList,
};
const rootReducer = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);

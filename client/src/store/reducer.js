import { combineReducers } from "redux";
import * as reducers from "./reducers/index";

// import counterReducer from "./reducers/counter";
// import resultsReducer from "./reducers/results";
// import personReducer from "./reducers/person";

const allReducers = combineReducers({
  ctr: reducers.counterReducer,
  res: reducers.resultsReducer,
  prsn: reducers.personReducer
});

export default allReducers;
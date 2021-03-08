import * as actionsTypes from "../../actions/index";
import { updateObject } from "../../utility";

const initialState = {
  results: []
};

// export const resultsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionsTypes.STORE_RESULT:
//       // console.log("yippie");
//       //data Transformation in Reducer best place for em
//       // value: action.result * 2
//       return {
//         ...state,
//         results: state.results.concat({
//           id: new Date(),
//           value: action.result
//         })
//       };
//     case actionsTypes.DELETE_RESULT:
//       // const id = 2;
//       // const newArray = [...state.results];
//       // newArray.splice(id, 1);
//       const newArray = state.results.filter(result => {
//         return action.index !== result.id;
//       });
//
//       return {
//         ...state,
//         results: newArray
//       };
//     default:
//       return state;
//   }
// };
const deleteResult = (state, action) => {
  const newArray = state.results.filter(result => {
    return action.index !== result.id;
  });
  return updateObject(state, { results: newArray });
};
//A BETTER WAY
export const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });

    case actionsTypes.DELETE_RESULT:
      return deleteResult(state, action);

    default:
      return state;
  }
};

// export default resultsReducer;
// if (action.type === "INCREMENT") {
//   return {
//     ...state,
//     counter: state.counter + 1
//   };
// }
// if (action.type === "DECREMENT") {
//   return {
//     ...state,
//     counter: state.counter - 1
//   };
// }
// if (action.type === "ADD") {
//   return {
//     ...state,
//     counter: state.counter + action.value
//   };
// }
// if (action.type === "SUBTRACT") {
//   return {
//     ...state,
//     counter: state.counter - action.value
//   };
// }
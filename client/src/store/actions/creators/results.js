import * as actionTypes from "../index";

//ACTION CREATORS

// // // // Synchronous
//
export const saveResult = res => {
  //Data Transformation in actions
  // const updatedResult = res * 2;
  // return { type: actionTypes.STORE_RESULT, result: updatedResult };
  return { type: actionTypes.STORE_RESULT, result: res };
};
//
export const deleteResult = i => {
  return { type: actionTypes.DELETE_RESULT, index: i };
};

// // // //Asynchronous
//
export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 1000);
  };
};

//get somthing from the state if you wanna Transform data in the action creator based on the value of
//a state value, or pass it as an argument when you call the action creator from your container
// export const storeResult = res => {
//   return (dispatch, getState) => {
//     setTimeout(() => {
//       const oldCounter = getState().ctr.counter;
//       console.log(oldCounter);
//       dispatch(saveResult(res));
//     }, 1000);
//   };
// };
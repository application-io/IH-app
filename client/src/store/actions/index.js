//ALL EXPORTS

//ACTION CREATORS
export { increment, decrement, add, subtract } from "./creators/counter";
//
export { storeResult, deleteResult } from "./creators/result";
//
export { addPerson, removePerson } from "./creators/person";

//ACTION TYPES
export { INCREMENT, DECREMENT, ADD, SUBTRACT } from "./types/counter";
//
export { STORE_RESULT, DELETE_RESULT } from "./types/result";
//
export { REMOVE_PERSON, ADD_PERSON } from "./types/person";

//REFERENCE
// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";
// export const ADD = "ADD";
// export const SUBTRACT = "SUBTRACT";
// export const STORE_RESULT = "STORE_RESULT";
// export const DELETE_RESULT = "DELETE_RESULT";
// export const REMOVE_PERSON = "REMOVE_PERSON";
// export const ADD_PERSON = "ADD_PERSON";
//
// //ACTION CREATORS
// // // // // Synchronous
// export const increment = () => {
//   return { type: INCREMENT };
// };
// //
// export const decrement = () => {
//   return { type: DECREMENT };
// };
// //
// export const add = val => {
//   return { type: ADD, value: val };
// };
// //
// export const subtract = val => {
//   return { type: SUBTRACT, value: val };
// };
// //
// export const saveResult = res => {
//   return { type: STORE_RESULT, result: res };
// };
// //
// export const deleteResult = i => {
//   return { type: DELETE_RESULT, index: i };
// };
//
// // // // //Asynchronous
// //
// export const storeResult = res => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(saveResult(res));
//     }, 1000);
//   };
// };
//
// // only synchronous actionCreators updates the store
// // asynchronous onces passes through the thunk middleware provided by redux-thunk and then
// // calls the synchronous actions
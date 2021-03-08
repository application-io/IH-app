import * as actionTypes from "../../actions/index";

const initialState = {
  persons: []
};

export const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.REMOVE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((person, i) => {
          return action.index !== state.persons[i].id;
        })
      };
    default:
      return state;
  }
};

// export default personReducer;
// case actionTypes.ADD_PERSON:
//   const newPerson = {
//     id: Math.floor(Math.random() * 20),
//     name: Math.floor(Math.random() * 40) >= 20 ? "Godwin" : "Kingsly",
//     age: Math.floor(Math.random() * 40)
//   };
//   return {
//     ...state,
//     persons: state.persons.concat(newPerson)
//   };
// case actionTypes.REMOVE_PERSON:
//   return {
//     ...state,
//     persons: state.persons.filter(person => {
//       return action.index !== state.id;
//     })
//   };
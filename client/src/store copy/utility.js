export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  };
};

export const insertItem = (array, action) => {
  let newArray = array.splice();
  newArray.splice(action.index, 0, action.item);
  return newArray;
};

export const removeItem = (array, action) => {
  let newArray = array.splice();
  newArray.splice(action.index, 1);
  return newArray;
};
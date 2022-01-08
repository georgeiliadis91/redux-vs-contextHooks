export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return addItem(state, action.payload);
    case "REMOVE_PRODUCT":
      return removeItem(state, action.payload);
    default:
      return state;
  }
};

//FUNCTIONS
const addItem = (state, id) => {
  const exists = state.find((item) => item.id === id);

  if (!exists) {
    return (state = [...state, { id: id, amount: 1 }]);
  } else {
    const data = state.filter((prod) => {
      return prod.id != id;
    });

    return (state = [...data, { id: exists.id, amount: exists.amount + 1 }]);
  }
};

const removeItem = (state, id) => {
  const data = state.filter((product) => {
    return product.id !== id;
  });

  return data;
};

export const loancases = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      return [...state, action.payload];

    default:
      return state;
  }
};

import BAKERY_DATA from "./BakeryData";

const INITIAL_STATE = {
  collections: BAKERY_DATA,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

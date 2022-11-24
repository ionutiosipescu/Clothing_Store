import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// Reducers should only focus on updating the state
// hey i got some payloads(wich means some state)
// i will update the state with this
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};

import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ActionTypes.ADD_PRODUCT:
      return { ...state.products, payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.FETCH_PRODUCT_DETAILS:
      console.log(state, "state");
      return { ...state, ...payload };

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

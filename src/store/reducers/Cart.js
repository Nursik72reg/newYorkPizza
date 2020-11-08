import {ADD_PIZZA_CART} from "../actions/Cart";


const initialState = {
    obj: {},
    totalCount:0,
    totalPrice:0
};


export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
      case ADD_PIZZA_CART: {
          let item = {
              ...state.obj,
              [action.payload.id]: !state.obj[action.payload.id]
                  ? [action.payload]
                  : [...state.obj[action.payload.id], action.payload]
          };
          let itemValues = Object.values(item)
          let ArrayTotal = [].concat.apply([],itemValues);
          let totatlPrice = ArrayTotal.reduce((summ, r)=>r.price+summ,0)
          return {
              ...state,
              obj:item,
              totalCount: ArrayTotal.length,
              totalPrice:  totatlPrice
          }
      }

  }
    return state
};
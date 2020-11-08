import {ADD_PIZZAS, SET_LOADING_PIZZAS} from "../actions/Pizzas";

const initialState = {
    pizzas:[],
    loading:false
};


export const pizzasReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZAS: {
            return {
                ...state,
                pizzas:action.payload,
            }
        }
        case SET_LOADING_PIZZAS: {
            return {
                ...state,
                loading: action.payload
            }
        }
    }

    return state
}


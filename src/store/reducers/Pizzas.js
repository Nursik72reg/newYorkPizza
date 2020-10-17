import {ADD_PIZZAS} from "../actions/Pizzas";

const initialState = {
    pizzas:[]
};


export const pizzasReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZAS: {
            return {
                ...state, pizzas:action.payload
            }
        }
    }

    return state
}


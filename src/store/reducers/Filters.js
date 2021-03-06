import {SET_CATEGORY, SET_SORT_BY} from "../actions/Filters";

const initialState = {
    category : null,
    sortBy:'price'
};

export const filtersReducers  = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,sortBy:action.payload
            };
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }


    }

    return state
};
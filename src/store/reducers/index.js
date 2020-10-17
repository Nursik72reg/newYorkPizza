import {combineReducers} from "redux";

import {filtersReducers} from "./Filters";
import {pizzasReducers} from "./Pizzas";


export const rootReducers = combineReducers({
    filters: filtersReducers,
    pizzas: pizzasReducers
});

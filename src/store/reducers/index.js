import {combineReducers} from "redux";

import {filtersReducers} from "./Filters";
import {pizzasReducers} from "./Pizzas";
import {cartReducers} from "./Cart";


export const rootReducers = combineReducers({
    filters: filtersReducers,
    pizzas: pizzasReducers,
    cart: cartReducers
});

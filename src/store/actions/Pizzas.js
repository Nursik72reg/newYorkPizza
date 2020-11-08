import {pizzaApi} from "../../api/Api";

export const ADD_PIZZAS = "add_pizza";
export const SET_LOADING_PIZZAS = "set_loading_pizzas";

export const setPizzas = (category, sortBy) =>
    async (dispatch) => {
        dispatch(setLoadingPizzas(true))
        let dataPizzas = await pizzaApi.getPizzas(category,sortBy);
        dispatch (addPizzas(dataPizzas.data));
        dispatch(setLoadingPizzas(false))
};

export const setLoadingPizzas = (loading) => ({
    type:SET_LOADING_PIZZAS,
    payload:loading
});

export const addPizzas = (item) => {
    return {
        type : ADD_PIZZAS,
        payload:item
    }
};
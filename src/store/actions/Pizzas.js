export const ADD_PIZZAS = "add_pizza";

export const addPizzas = (item) => {
    return {
        type : ADD_PIZZAS,
        payload:item
    }
};

export const ADD_PIZZA_CART = "addPizzaCart";

export const newAddPizzaCart = (obj) => {
    return {
        type:ADD_PIZZA_CART,
        payload:obj
    }
}
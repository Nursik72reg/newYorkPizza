export const CLEAR_PIZZA_CART = "CLEAR_PIZZA_CART"
export const ADD_PIZZA_CART = "ADD_PIZZA_CART";
export const REMOVE_BLOCK_PIZZA = "REMOVE_BLOCK_PIZZA"
export const MINUS_PIZZA = "MINUS_PIZZA"
export const PLUS_PIZZA = "PLUS_PIZZA"

export const newAddPizzaCart = (obj) => {
    return {
        type: ADD_PIZZA_CART,
        payload:obj
    }
}

export const clearPizzaCart = () => ({
    type: CLEAR_PIZZA_CART
})

export const removeBlockPizza = (id) => {
    return {
        type: REMOVE_BLOCK_PIZZA,
        payload:id
    }
}

export const minusPizza = (id) => {
    return {
        type: MINUS_PIZZA,
        payload: id
    }
}

export const plusPizza = (id) => {
    return {
        type: PLUS_PIZZA,
        payload: id
    }
}






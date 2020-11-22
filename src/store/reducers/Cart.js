import {ADD_PIZZA_CART, CLEAR_PIZZA_CART, MINUS_PIZZA, PLUS_PIZZA, REMOVE_BLOCK_PIZZA} from "../actions/Cart";


const initialState = {
    obj: {},
    totalCount: 0,
    totalPrice: 0,
    itemBlock: {}

};


export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_CART: {
            let sumTotalPrice = (itemBlock) => {
                return itemBlock.reduce((count, obj) => count + obj.price, 0)
            }

            let itemBlock = !state.obj[action.payload.id]
                ? [action.payload]
                : [...state.obj[action.payload.id].item, action.payload]

            let countBlockPizzas = {
                ...state.obj,
                [action.payload.id]: {
                    item: itemBlock,
                    totalPriceBlock: sumTotalPrice(itemBlock)
                }
            };


            let itemValues = Object.values(countBlockPizzas).map(m => m.item)

            let ArrayTotal = [].concat.apply([], itemValues);
            let totalPrice = sumTotalPrice(ArrayTotal)

            return {
                ...state,
                obj: countBlockPizzas,
                totalCount: ArrayTotal.length,
                totalPrice: totalPrice,
            }
        }

        case CLEAR_PIZZA_CART: {
            return {
                ...state,
                obj: {},
                totalCount: 0,
                totalPrice: 0,

            }
        }


        case REMOVE_BLOCK_PIZZA: {
            let newObj = {...state.obj};
            delete newObj[action.payload]
            let itemValues = Object.values(newObj).map(m => m.item)
            let totalCount = [].concat.apply([], itemValues)
            return {
                ...state,
                obj: newObj,
                totalCount: totalCount.length,
                totalPrice: totalCount.reduce((count, obj) => count + obj?.price, 0)

            }
        }

        case MINUS_PIZZA: {
            let newObj = [...state.obj[action.payload].item.slice(1)];
            let newObjj = [...state.obj[action.payload].item]
            let totalCount = [].concat.apply([], newObjj)
            let obj = {
                ...state.obj,
                [action.payload]: Object.keys(newObjj).length > 1
                    ? {
                        item: newObj,
                        totalPriceBlock: newObj.reduce((count, obj) => count + obj.price, 0)
                    }
                    : {
                        item: newObjj,
                        totalPriceBlock: newObjj.reduce((count, obj) => count + obj.price, 0)
                    }

            }

            return {
                ...state,
                obj: obj,
                totalCount: totalCount.length,
                totalPrice: newObjj.reduce((count, obj) => count + obj.price, 0)
            }
        }

        case PLUS_PIZZA: {
            const newObjItems = [
                ...state.obj[action.payload].item,
                state.obj[action.payload].item[0],
            ];

            const newItems = {
                ...state.obj,
                [action.payload]: {
                    item: newObjItems,
                    totalPriceBlock: newObjItems.reduce((count, obj) => count + obj.price, 0)
                },
            };

            return {
                ...state,
                obj: newItems,

            };
        }

    }
    return state
};
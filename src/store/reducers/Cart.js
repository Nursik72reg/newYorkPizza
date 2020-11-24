import {ADD_PIZZA_CART, CLEAR_PIZZA_CART, MINUS_PIZZA, PLUS_PIZZA, REMOVE_BLOCK_PIZZA} from "../actions/Cart";


const initialState = {
    obj: {},
    totalCount: 0,
    totalPrice: 0,
    itemBlock: {}

};


export const cartReducers = (state = initialState, action) => {
    const _get = (obj, path) => {
        const [firstKey, ...keys] = path.split('.');
        return keys.reduce((val, key) => {
            debugger
            return val[key];
        }, obj[firstKey]);
    };

    const getTotalSum = (obj, path) => {
        return Object.values(obj).reduce((sum, obj) => {
            const value = _get(obj, path);
            return sum + value;
        }, 0);
    };


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
            const oldItems = state.obj[action.payload].item;

            const newObjItems =
                oldItems.length > 1 ? state.obj[action.payload].item.slice(1) : oldItems;

            const newItems = {
                ...state.obj,
                [action.payload]: {
                    item: newObjItems,
                    totalPriceBlock: newObjItems.reduce((count, obj) => count + obj.price, 0)
                },
            };

            const totalCount = getTotalSum(newItems, 'item.length');
            const totalPrice = getTotalSum(newItems, 'totalPriceBlock');
            return {
                ...state,
                obj: newItems,
                totalCount,
                totalPrice
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
            const totalCount = getTotalSum(newItems, 'item.length');
            const totalPrice = getTotalSum(newItems, 'totalPriceBlock');
            return {
                ...state,
                obj: newItems,
                totalCount,
                totalPrice
            };
        }

    }
    return state
};
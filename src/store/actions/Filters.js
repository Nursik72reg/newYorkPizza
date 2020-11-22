export const SET_SORT_BY = "SET_SORT_BY";
export const SET_CATEGORY = "SET_CATEGORY";

export const setSortBy = (type) => {
    return {
        type: SET_SORT_BY,
        payload: type
    }
};


export const setCategory = (catIndex) => {
    return {
        type: SET_CATEGORY,
        payload: catIndex
    }
};
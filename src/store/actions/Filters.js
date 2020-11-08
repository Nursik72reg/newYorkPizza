export const SET_SORT_BY = "set_sort_by";
export const SET_CATEGORY = "set_category";

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
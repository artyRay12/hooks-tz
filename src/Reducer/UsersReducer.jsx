import React, { useReducer } from "react";

export const initialState = {
    isLoading: false,
    data: [],
    sortType: "asc",
    sortField: "id",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SORT_ASC":
            return {
                ...state,
            };

        case "SORT_DESC":
            return {};
        case "PUT_DATA":
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;

import React, { useReducer } from "react";
import { createContext } from "react";

export const initialState = {
    token: localStorage.getItem("token") || null,
    data: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                token: action.payload,
            };
        case "SET_USERS":
            if (!action.payload) {
                return;
            }
            return {
                ...state,
                data: [...action.payload],
            };
        default:
            return state;
    }
};

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const value = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

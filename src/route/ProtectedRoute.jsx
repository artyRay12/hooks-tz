import React from "react";
import { useContext } from "react";
import { UserContext } from "../Reducer/userReducer";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = (props) => {
    const [{ token }] = useContext(UserContext);

    if (token) {
        return <Route {...props} />;
    } else {
        return <Redirect to="/login" />;
    }
};

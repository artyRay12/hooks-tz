import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Reducer/userReducer";

const TopBar = () => {
    const [state] = useContext(UserContext);
    return <div>{state.token ? "You logged" : "Your need login"}</div>;
};

export default TopBar;

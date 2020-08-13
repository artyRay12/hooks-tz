import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Reducer/userReducer";

const TopBar = () => {
    const [{ token }] = useContext(UserContext);
    return <div>{token && "You logged"}</div>;
};

export default TopBar;

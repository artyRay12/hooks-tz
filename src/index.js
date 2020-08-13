import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Reducer/userReducer";

ReactDOM.render(
    <UserContextProvider>
        <BrowserRouter basename="/hookz-tz">
            <App />
        </BrowserRouter>
    </UserContextProvider>,
    document.getElementById("root")
);

import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Table from "./Components/Table/Table";
import reducer, { initialState } from "./Reducer/UsersReducer";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import TopBar from "./Components/TopBar/TopBar";

function App() {
    /* 
    if (token) {
        Axios({
            method: "get",
            url: `${baseUrl}/api/v1/users/`,
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then((response) => {
                //dispatch({type: 'PUT_DATA', payload: response.data})
            })
            .catch((error) => {
                console.log(error);
            });
    } */

    return (
        <div className="App">
            <div className="container">
                <TopBar />
                <Switch>
                    <Route path="/" component={Table} exact />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </div>
    );
}

export default App;

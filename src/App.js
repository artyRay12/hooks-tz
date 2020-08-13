import React from "react";
import "./App.css";
import Table from "./Components/Table/Table";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import TopBar from "./Components/TopBar/TopBar";
import { ProtectedRoute } from "./route/ProtectedRoute";

function App() {
    return (
        <div className="App">
            <div className="container">
                <TopBar />
                <Switch>
                    <ProtectedRoute path="/" component={Table} exact />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </div>
    );
}

export default App;

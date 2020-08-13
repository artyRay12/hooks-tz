import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./route/ProtectedRoute";
import LoginPage from "./Pages/LoginPage/LoginPage";
import TablePage from "./Pages/TablePage/TablePage";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Switch>
                    <ProtectedRoute path="/" component={TablePage} exact />
                    <Route path="/login/" component={LoginPage} />
                </Switch>
            </div>
        </div>
    );
}

export default App;

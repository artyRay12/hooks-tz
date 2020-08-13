import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../Reducer/userReducer";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import "./login.css";
import {
    USER_REG,
    PASSWORD_REG,
    createChecker,
    USERNAME_ERROR_MESSAGE,
    PASSWORD_ERROR_MESSAGE,
    SERVER_ERROR,
} from "./login_config";

const LoginPage = () => {
    const [username, setUsername] = useState("test_super");
    const [password, setPassword] = useState("");
    const [usernameError, setusernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [isSuccessfullSubmit, setisSuccessfullSubmit] = useState(false);
    const [, dispatch] = useContext(UserContext);
    const [{ isLoading, response, error }, doFetch] = useFetch(
        "/api-token-auth/"
    );

    const userCheck = createChecker(USER_REG);
    const passwordCheck = createChecker(PASSWORD_REG);

    const check = () => {
        console.log(`username ${userCheck(username)}`);
        console.log(`password ${passwordCheck(password)}`);

        if (!userCheck(username)) {
            setusernameError(true);
        } else {
            setusernameError(false);
        }

        if (!passwordCheck(password)) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        check(username, password);
        if (usernameError && passwordError) {
            return;
        }

        doFetch({
            method: "post",
            data: {
                username,
                password,
            },
        });
    };
    console.log(usernameError + "    " + passwordError);

    useEffect(() => {
        if (!response) return;

        dispatch({ type: "SET_TOKEN", payload: response.token });
        localStorage.setItem("token", response.token);
        setisSuccessfullSubmit(true);
    }, [response, dispatch]);

    if (isSuccessfullSubmit) return <Redirect to="/" />;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 col-xs-12">
                    <h1 className="text-xs-center login-title">Login</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <fieldset className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg form-input"
                                placeholder="username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </fieldset>

                        <div class="error-text">
                            <p>{usernameError && USERNAME_ERROR_MESSAGE}</p>
                        </div>
                        <fieldset className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-lg form-input"
                                autoComplete="current-pass"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </fieldset>
                        <div class="error-text">
                            <p>{passwordError && PASSWORD_ERROR_MESSAGE}</p>
                            <p>
                                {error &&
                                    !passwordError &&
                                    !usernameError &&
                                    SERVER_ERROR}
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-light btn-lg login-btn"
                            type="submit"
                            disabled={isLoading}
                        >
                            Enter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

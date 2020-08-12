import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../Reducer/userReducer";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";

const Login = () => {
    const [username, setUsername] = useState("test_super");
    const [password, setPassword] = useState(null);
    const [isSuccessfullSubmit, setisSuccessfullSubmit] = useState(false);
    const [{token}, dispatch] = useContext(UserContext);

    const [{ isLoading, response, error }, doFetch] = useFetch(
        "/api-token-auth/"
    );


    const handleSubmit = (e) => {
        e.preventDefault();
        doFetch({
            method: "post",
            data: {
                username,
                password,
            },
        });
    };

    useEffect(() => {
        if (!response) return;

        dispatch({ type: "SET_TOKEN", payload: response.token });
        localStorage.setItem('token', response.token)
        setisSuccessfullSubmit(true);
    }, [response]);



    if (isSuccessfullSubmit) return <Redirect to="/" />;

    return (
        <div className="auth-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center"></h1>
                        <p className="text-xs-center">
                            <Link></Link>
                        </p>
                        <form action="" onSubmit={handleSubmit}>
                            <fieldset className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    autoComplete="current-pass"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </fieldset>
                            <button
                                className="btn btn-lg btn-primary pull-xs-right"
                                type="submit"
                                disabled={isLoading}
                            >
                                Enter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

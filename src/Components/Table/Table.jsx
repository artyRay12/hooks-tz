import React from "react";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Reducer/userReducer";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { TableRow } from "./TableRow";

const Table = () => {
    const [state, dispatch] = useContext(UserContext);

    console.log('render');

    const [{ isLoading, response, error }, doFetch] = useFetch(
        "/api/v1/users/"
    );

    console.log(state);
    useEffect(() => {
        doFetch({
            method: "get",
            headers: {
                Authorization: `Token ${state.token}`,
            },
        });
    }, []);

    useEffect(() => {
        if(!response) return
        dispatch({ type: "SET_USERS", payload: response });
    }, [response]);

    const onSort = (fieldName) => {
        dispatch({ type: "SORT_ASC" });
    };

    if (!state.token) {
        return <Redirect to="/login" />;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col" onClick={() => onSort("id")}>
                        id
                    </th>
                    <th scope="col" onClick={() => onSort("first")}>
                        user name
                    </th>
                    <th scope="col" onClick={() => onSort("last")}>
                        first name
                    </th>
                    <th scope="col" onClick={() => onSort("handle")}>
                        last name
                    </th>
                </tr>
            </thead>
            <tbody>

                {state.data.map((item) => {
                    return <TableRow item={item} />;
                })}
            </tbody>
        </table>
    );
};

export default Table;

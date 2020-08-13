import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Reducer/userReducer";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { TableRow } from "./TableRow";
import { useState } from "react";
import './table.css'

const Table = () => {
    const [sortType, setSortType] = useState("ASC");
    const [state, dispatch] = useContext(UserContext);
    const [{ isLoading, response }, doFetch] = useFetch("/api/v1/users/");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        doFetch({
            method: "get",
            headers: {
                Authorization: `Token ${state.token}`,
            },
        });
    }, [state.token]);

    useEffect(() => {
        if (!response) return;
        dispatch({ type: "SET_USERS", payload: response });
    }, [response, dispatch]);

    const onSort = (fieldName) => {
        const arr = [...state.data];
        sortType === "ASC" ? setSortType("DESC") : setSortType("ASC");

        if (sortType === "ASC")
            arr.sort((x, y) => (x[fieldName] > y[fieldName] ? 1 : -1));
        else arr.sort((x, y) => (x[fieldName] < y[fieldName] ? 1 : -1));

        dispatch({ type: "SET_USERS", payload: arr });
    };

    let filteredContacts = state.data.filter((contact) => {
        return contact.username.indexOf(filter) !== -1;
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <input
                type="text"
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                className="form-control form-control-lg search-input"
                placeholder="filter by username"
            />
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col" onClick={() => onSort("id")}>
                            id
                        </th>
                        <th scope="col" onClick={() => onSort("username")}>
                            user name
                        </th>
                        <th scope="col" onClick={() => onSort("first_name")}>
                            first name
                        </th>
                        <th scope="col" onClick={() => onSort("last_name")}>
                            last name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map((item) => {
                        return <TableRow item={item} key={item.id} />;
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Table;

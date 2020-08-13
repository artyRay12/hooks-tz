import React from "react";
import Table from "../../Components/Table/Table";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import { useContext } from "react";
import { UserContext } from "../../Reducer/userReducer";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
import Preloader from "../../Components/Preloader/Preloader";

const TablePage = () => {
    const [sortType, setSortType] = useState("ASC");
    const [{ token, data }, dispatch] = useContext(UserContext);
    const [{ isLoading, response }, doFetch] = useFetch("/api/v1/users/");
    const [filter, setFilter] = useState("");

    const onFilterChange = (newFilterText) => {
        setFilter(newFilterText);
    };

    useEffect(() => {
        doFetch({
            method: "get",
            headers: {
                Authorization: `Token ${token}`,
            },
        });
    }, [token]);

    useEffect(() => {
        if (!response) return;
        dispatch({ type: "SET_USERS", payload: response });
    }, [response, dispatch]);

    const onSort = (fieldName) => {
        const arr = [...data];
        sortType === "ASC" ? setSortType("DESC") : setSortType("ASC");

        if (sortType === "ASC")
            arr.sort((x, y) => (x[fieldName] > y[fieldName] ? 1 : -1));
        else arr.sort((x, y) => (x[fieldName] < y[fieldName] ? 1 : -1));

        dispatch({ type: "SET_USERS", payload: arr });
    };

    let filteredContacts = data.filter((contact) => {
        return contact.username.indexOf(filter) !== -1;
    });

    return (
        <>
            <SearchPanel onFilterChange={onFilterChange} />
            {!isLoading ? (
                <Table
                    data={filter === "" ? data : filteredContacts}
                    onSort={onSort}
                />
            ) : (
                <Preloader />
            )}
        </>
    );
};

export default TablePage;

import React from "react";

export const TableRow = ({ item }) => {
    const { first_name, id, last_name, username } = item;

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{username}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
        </tr>
    );
};

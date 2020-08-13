import React from "react";
import './tableRow.css'

export const TableRow = ({ item }) => {
    const { first_name, id, last_name, username } = item;

    return (
        <tr>
            <th className="row-item" scope="row">
                {id}
            </th>
            <td className="row-item">{username}</td>
            <td className="row-item">{first_name}</td>
            <td className="row-item">{last_name}</td>
        </tr>
    );
};

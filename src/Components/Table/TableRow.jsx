import React from "react";

export const TableRow = ({item}) => {
   const {first_name, id, is_active, is_superuser, last_login, last_name, username } = item;
   
    return (
        <tr key={id}>
            <th scope="row">{id}</th>
            <td>{username}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
        </tr>
    ); 
};

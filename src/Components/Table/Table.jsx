import React from "react";
import { TableRow } from "./TableRow";
import "./table.css";

const Table = ({ onSort, data }) => {
    console.log("render");
    return (
        <div className="table-responsive-lg table-responsive-md table-responsive-sm">
            <table className="table table-dark">
                <caption>List of users</caption>
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
                    {data.slice(1, 100).map((item, ind) => {
                        return <TableRow item={item} key={item.id} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

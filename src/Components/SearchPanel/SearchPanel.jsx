import React from "react";
import { useState } from "react";

const SearchPanel = ({ onFilterChange }) => {
    const [value, setValue] = useState("");
    onFilterChange(value);

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="form-control form-control-lg search-input mb-4"
            placeholder="filter by username"
        />
    );
};

export default SearchPanel;

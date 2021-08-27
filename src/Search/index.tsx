import React, { useState } from "react";

function Search() {
    const [search, setSearch] = useState("");

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="검색"
                value={search}
                onChange={onSearchChange}
            />
            <button type="submit">검색</button>
        </form>
    );
}

export default Search;

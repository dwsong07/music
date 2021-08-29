import { useHistory } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        history.push(`/search/${encodeURIComponent(searchText)}`);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="검색"
                value={searchText}
                onChange={onSearchChange}
            />
            <button type="submit">검색</button>
        </form>
    );
}

export default SearchBox;

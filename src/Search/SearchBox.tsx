import { useState } from "react";
import ytsr from "ytsr";

function SearchBox() {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState<ytsr.Result>(
        {} as ytsr.Result
    );

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const searchResult = await window.electronApi.search(search);
        setSearchResult(searchResult);
        console.log(searchResult);
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

export default SearchBox;

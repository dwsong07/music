import { observer } from "mobx-react";
import { useStore } from "../stores";

function SearchBox() {
    const {
        searchStore: { searchText, setSearchText, setSearchResult },
    } = useStore();

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const searchResult = await window.electronApi.search(searchText);
        setSearchResult(searchResult);
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

export default observer(SearchBox);

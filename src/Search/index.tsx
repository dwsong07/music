import { RouteComponentProps } from "react-router-dom";
import SearchList from "./SearchList";

interface MatchParams {
    text: string;
}

function Search({ match }: RouteComponentProps<MatchParams>) {
    const { text } = match.params;

    return (
        <div>
            <SearchList text={text} />
        </div>
    );
}

export default Search;

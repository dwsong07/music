import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function MenuBar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <SearchBox />
        </div>
    );
}

export default MenuBar;

import Search from "./Search";
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import MenuBar from "./MenuBar";

function App() {
    return (
        <Router>
            <MenuBar />
            <Switch>
                <Route path="/" exact>
                    hi
                </Route>
                <Route path="/search/:text" component={Search} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

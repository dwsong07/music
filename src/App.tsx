import Search from "./Search";
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { useEffect } from "react";
import MenuBar from "./MenuBar";
import Player from "./Player";
import { useStore } from "./stores";
import { observer } from "mobx-react";

function App() {
    const {
        audioStore: { audioServerStart, port },
    } = useStore();

    useEffect(() => {
        audioServerStart();
    }, []);

    return (
        <Router>
            <MenuBar />
            <Switch>
                <Route path="/" exact>
                    {port > 0 && (
                        <Player videoUrl="https://www.youtube.com/watch?v=ap2sg77LekI" />
                    )}
                </Route>
                <Route path="/search/:text" component={Search} />
                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}

export default observer(App);

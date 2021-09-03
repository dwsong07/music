import Search from "./Search";
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { useState, useEffect } from "react";
import MenuBar from "./MenuBar";
import Player from "./Player";

function App() {
    const [audioPort, setAudioPort] = useState(0);

    useEffect(() => {
        const serverStart = async () => {
            const port = await window.electronApi.invoke("audio_server_start");

            setAudioPort(port);
        };

        serverStart();
    }, []);

    return (
        <Router>
            <MenuBar />
            <Switch>
                <Route path="/" exact>
                    {audioPort > 0 && (
                        <Player
                            videoUrl="https://www.youtube.com/watch?v=ap2sg77LekI"
                            audioPort={audioPort}
                        />
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

export default App;

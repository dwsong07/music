import { observer } from "mobx-react";
import ytsr from "ytsr";
import { useStore } from "../stores";

function SearchList() {
    const {
        searchStore: { searchResult },
    } = useStore();

    const videos = searchResult?.items.filter(
        (item) => item.type === "video"
    ) as ytsr.Video[];

    return (
        <ul>
            {videos ? (
                videos.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))
            ) : (
                <div></div>
            )}
        </ul>
    );
}

export default observer(SearchList);

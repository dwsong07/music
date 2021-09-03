import { useEffect, useState } from "react";
import ytsr from "ytsr";

interface SearchListProps {
    text: string;
}

function SearchList({ text }: SearchListProps) {
    const [searchResult, setSearchResult] = useState<ytsr.Video[] | null>();

    useEffect(() => {
        const fetchResult = async () => {
            const searchedApiResult = await window.electronApi.invoke(
                "video_search",
                text
            );

            setSearchResult(
                searchedApiResult?.filter(
                    (item) => item.type === "video"
                ) as ytsr.Video[]
            );
        };
        fetchResult();
    }, [text]);

    return (
        <ul>
            {searchResult ? (
                searchResult.map((item) => (
                    <li key={item.id}>
                        <img
                            src={item.thumbnails[0].url ?? ""}
                            alt={item.title}
                            width="70px"
                            height="70px"
                        />
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))
            ) : (
                <div>Searching..</div>
            )}
        </ul>
    );
}

export default SearchList;

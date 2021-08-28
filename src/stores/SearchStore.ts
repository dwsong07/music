import { makeAutoObservable } from "mobx";
import ytsr from "ytsr";

export default class SearchStore {
    constructor() {
        makeAutoObservable(this);
    }

    searchText = "";
    searchResult?: ytsr.Result;

    setSearchText = (text: string) => {
        this.searchText = text;
    };

    setSearchResult = (result: ytsr.Result) => {
        this.searchResult = result;
    };
}

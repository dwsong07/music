import { makeAutoObservable } from "mobx";

export class AudioStore {
    port = 0;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    *audioServerStart() {
        this.port = yield window.electronApi.invoke("audio_server_start");
    }
}

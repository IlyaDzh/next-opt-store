import { makeAutoObservable } from "mobx";

export class UIStore {
    searchOverlayOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    setSearchOverlayOpen = (value: boolean): void => {
        this.searchOverlayOpen = value;
    };
}

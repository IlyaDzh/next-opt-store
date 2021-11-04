import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";

enableStaticRendering(typeof window === "undefined");

export class RootStore {
    light = false;

    constructor() {
        makeAutoObservable(this);
    }

    toggleMode = () => {
        this.light = !this.light;
    };

    hydrate = (data: any) => {
        if (!data) return;

        this.light = data.light;
    };
}

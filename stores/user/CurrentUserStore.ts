import { RootStore } from "stores";

interface IUser {
    nickname: string;
    address: string;
}

export class CurrentUserStore {
    user: IUser = {
        nickname: "kek",
        address: "saki"
    };

    root: RootStore;

    constructor(root: RootStore) {
        this.root = root;
    }

    setUser = (user: IUser): void => {
        this.user = user;
    };
}

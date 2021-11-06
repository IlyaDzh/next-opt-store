interface IUser {
    nickname: string;
    address: string;
}

export class CurrentUserStore {
    user: IUser = {
        nickname: "kek",
        address: "saki"
    };

    constructor(initialData: any = {}) {
        this.user = initialData.user;
    }

    setUser = (user: IUser): void => {
        this.user = user;
    };
}

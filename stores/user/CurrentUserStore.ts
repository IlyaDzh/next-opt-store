interface IUser {
    nickname: string;
    address: string;
}

export class CurrentUserStore {
    user: IUser = {
        nickname: "kek",
        address: "saki"
    };

    setUser = (user: IUser): void => {
        this.user = user;
    };
}

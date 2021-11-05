import { enableStaticRendering } from "mobx-react-lite";

import { UIStore } from "stores/UIStore";
import { ProductStore } from "stores/product/ProductStore";
import { CurrentUserStore } from "stores/user/CurrentUserStore";

const isServer = typeof window === "undefined";

enableStaticRendering(isServer);

type SerializedStore = {
    isLoading: boolean;
};

export class RootStore {
    isLoading: boolean = true;

    interfaceStore: UIStore;
    productStore: ProductStore;
    currentUserStore: CurrentUserStore;

    constructor() {
        this.interfaceStore = new UIStore();
        this.productStore = new ProductStore(this);
        this.currentUserStore = new CurrentUserStore(this);
    }

    hydrate(serializedStore: SerializedStore) {
        this.isLoading = !!serializedStore.isLoading;
    }

    setIsLoading = (isLoading: boolean): void => {
        this.isLoading = isLoading;
    };
}

export async function fetchInitialStoreState() {
    // You can do anything to fetch initial store state
    return {};
}

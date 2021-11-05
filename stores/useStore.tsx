import { createContext, useContext } from "react";
import { enableStaticRendering } from "mobx-react-lite";

import { RootStore } from "stores";

interface IStoreProvider {
    store: RootStore;
}

const isServer = typeof window === "undefined";

enableStaticRendering(isServer);

let store: RootStore | null = null;

export const initializeStore = (initialRoot?: RootStore) => {
    if (isServer) {
        return new RootStore();
    }

    if (store === null) {
        store = new RootStore();
        // store = new RootStore(initialRoot);
    }

    return store;
};

export const StoreContext = createContext<RootStore>({} as RootStore);

export function useStore() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error("useStore must be used within StoreProvider");
    }

    return context;
}

export const StoreProvider: React.FC<IStoreProvider> = ({ children, store }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

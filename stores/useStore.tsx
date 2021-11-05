import { createContext, useContext } from "react";

import { RootStore } from "stores";

interface IStoreProvider {
    store: RootStore;
}

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

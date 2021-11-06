import { createContext, useContext } from "react";

import { IStores } from "stores";

interface IStoreProvider {
    value: IStores;
}

export const StoreContext = createContext<IStores>({} as IStores);

export function useStore() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error("useStore must be used within StoreProvider");
    }

    return context;
}

export const StoreProvider: React.FC<IStoreProvider> = ({ children, value }) => {
    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

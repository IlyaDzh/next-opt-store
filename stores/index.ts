import { enableStaticRendering } from "mobx-react-lite";

import { UIStore } from "stores/UIStore";
import { ProductStore } from "stores/product/ProductStore";
import { CurrentUserStore } from "stores/user/CurrentUserStore";
import { isServer } from "utils/isServer";

enableStaticRendering(isServer);

export interface IStores {
    uiStore: UIStore;
    productStore: ProductStore;
    currentUserStore: CurrentUserStore;
}

let clientSideStores: IStores;

export const getStores = (
    initialData = { productStore: {}, currentUserStore: {} }
) => {
    if (isServer) {
        return {
            uiStore: new UIStore(),
            productStore: new ProductStore(initialData.productStore),
            currentUserStore: new CurrentUserStore(initialData.currentUserStore)
        };
    }

    if (!clientSideStores) {
        clientSideStores = {
            uiStore: new UIStore(),
            productStore: new ProductStore(initialData.productStore),
            currentUserStore: new CurrentUserStore(initialData.currentUserStore)
        };
    }

    return clientSideStores;
};

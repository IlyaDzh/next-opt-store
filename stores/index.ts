import { enableStaticRendering } from "mobx-react-lite";

import { ProductStore } from "stores/product/ProductStore";
import { UIStore } from "stores/UIStore";

const isServer = typeof window === "undefined";

enableStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { productStore: {} }) {
    if (isServer) {
        return {
            productStore: new ProductStore(initialData.productStore),
            uiStore: new UIStore()
        };
    }

    if (store === null) {
        store = {
            productStore: new ProductStore(initialData.productStore),
            uiStore: new UIStore()
        };
    }

    return store;
}

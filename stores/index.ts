import { UIStore } from "stores/UIStore";
import { ProductStore } from "stores/product/ProductStore";
import { CurrentUserStore } from "stores/user/CurrentUserStore";

export class RootStore {
    isLoading: boolean = true;

    interfaceStore: UIStore;
    productStore: ProductStore;
    currentUserStore: CurrentUserStore;

    constructor(initialRoot?: RootStore) {
        // console.log(initialData);

        this.interfaceStore = new UIStore();
        this.productStore = new ProductStore(this);
        this.currentUserStore = new CurrentUserStore(this);
    }

    setIsLoading = (isLoading: boolean): void => {
        this.isLoading = isLoading;
    };
}

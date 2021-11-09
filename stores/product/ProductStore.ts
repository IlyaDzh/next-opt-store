import { makeAutoObservable } from "mobx";

import { IProduct } from "interfaces/Product";

export class ProductStore {
    product: IProduct | undefined;

    constructor(initialData: any = {}) {
        this.product = initialData.product;

        makeAutoObservable(this);
    }

    fetchProduct = async (id: string): Promise<void> => {
        console.log("fetch product with id:", id);

        try {
            const product = await fetch(`http://localhost:3000/api/product/${id}`);
            const data = await product.json();

            this.setProduct(data);
        } catch {}
    };

    setProduct = (product: IProduct) => {
        this.product = product;
    };

    __data = () => ({
        product: this.product
    });
}

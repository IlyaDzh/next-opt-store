import { observable, action } from "mobx";

interface IProduct {
    title: string;
    cost: string;
}

export class ProductStore {
    product: IProduct | undefined;

    constructor(initialData: any = {}) {
        this.product = initialData.product;
    }

    fetchProduct = async (id: string): Promise<void> => {
        console.log("fetch product with id:", id);

        const product: IProduct = await new Promise(resolve =>
            setTimeout(() => {
                const item = {
                    title: "AirPods 2",
                    cost: "2000"
                };
                resolve(item);
            }, 1000)
        );

        this.setProduct(product);
    };

    setProduct = (product: IProduct) => {
        this.product = product;
    };
}

import type { NextPage } from "next";
import Head from "next/head";
import { CustomNextPageContext } from "pages/_app";

const Item: NextPage<any> = ({ id, product }) => {
    return (
        <div>
            <Head>
                <title>Купить Товар {id}</title>
                <meta name="description" content={`Купить Товар ${id} в Саках`} />
            </Head>

            <h1>Товар {id}</h1>
            <h2>{product.title}</h2>
            <h3>{product.cost}</h3>
        </div>
    );
};

Item.getInitialProps = async (context: CustomNextPageContext) => {
    const { mobxStores, query } = context;

    await mobxStores.productStore.fetchProduct(query.id as string);

    return {
        id: query.id,
        product: mobxStores.productStore.product
    };
};

export default Item;

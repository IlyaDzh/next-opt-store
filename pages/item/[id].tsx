import type { NextPage } from "next";
import Head from "next/head";

import { CustomNextPageContext } from "pages/_app";
import { IProduct } from "interfaces/Product";

interface ItemProps {
    id?: string;
    product?: IProduct;
    notFound?: boolean;
}

const Item: NextPage<ItemProps> = ({ id, product, notFound }) => {
    if (notFound || !product) {
        return <div>Not Found</div>;
    }

    return (
        <div>
            <Head>
                <title>Купить Товар {id}</title>
                <meta name="description" content={`Купить Товар ${id} в Саках`} />
            </Head>

            <h1>Id: {id}</h1>

            <h2>Название: {product.title}</h2>

            <h3>Описание: {product.description}</h3>
            <h3>Категория: {product.category}</h3>
            <h3>Рейтинг: {product.rating}</h3>
            <h3>Цена: {product.price}</h3>
            <h3>Доступно на складе: {product.availabilityCount}</h3>

            <h4>Отзывы:</h4>
            <div>
                {product.reviews.map((review: any) => (
                    <div key={review.id}>
                        <h5>Имя: {review.name}</h5>
                        <h5>Рейтинг: {review.rating}</h5>
                        <h6>Текст: {review.text}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

Item.getInitialProps = async (context: CustomNextPageContext) => {
    const { mobxStores, query } = context;
    const { productStore } = mobxStores;

    await productStore.fetchProduct(query.id as string);

    if (!productStore.product) {
        return {
            notFound: true
        };
    }

    return {
        id: query.id?.toString(),
        product: productStore.product
    };
};

export default Item;

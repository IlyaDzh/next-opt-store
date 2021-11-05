import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Item: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Head>
                <title>Купить Товар {id}</title>
                <meta name="description" content={`Купить Товар ${id} в Саках`} />
            </Head>

            <h1>Товар {id}</h1>
        </div>
    );
};

Item.getInitialProps = async ({ store }: any) => {
    console.log(store);

    return {
        props: {}
    };
};

export default Item;

import type { NextPage } from "next";
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
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Товар {id}</h1>
        </div>
    );
};

export default Item;

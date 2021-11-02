import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Category: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <Head>
                <title>Купить {slug}</title>
                <meta name="description" content={`Купить ${slug} в Саках`} />
            </Head>

            <h1>{slug}</h1>
        </div>
    );
};

export default Category;

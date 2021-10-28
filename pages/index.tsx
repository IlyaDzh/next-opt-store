import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Оптовый магазин Саки</title>
                <meta name="description" content="Оптовый магазин Саки" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Главная страница</h1>

            <Link href="/_ui-kit">UiKit</Link>
        </div>
    );
};

export default Home;

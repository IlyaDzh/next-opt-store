import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div>
            <h1>Главная страница</h1>

            <Link href="/_ui-kit">UiKit</Link>
        </div>
    );
};

export default Home;

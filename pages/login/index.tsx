import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Container } from "components/layout/Container/Container";
import { LoginCard } from "components/cards/auth/LoginCard/LoginCard";
import { RegisterCard } from "components/cards/auth/RegisterCard/RegisterCard";
import styles from "pages/login/style.module.scss";

const Login: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Авторизация</title>
                <meta name="description" content="Авторизация" />
            </Head>

            <div className={styles.cards}>
                <LoginCard />
                <RegisterCard />
            </div>
        </Container>
    );
};

export default Login;

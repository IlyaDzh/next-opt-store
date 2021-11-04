import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ContentLayout } from "components/layout/ContentLayout/ContentLayout";
import { StoreProvider } from "stores/useStore";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ContentLayout>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
                <title>Оптовый магазин Саки</title>
                <meta name="description" content="Оптовый магазин Саки" />
            </Head>

            <StoreProvider {...pageProps}>
                <Component {...pageProps} />
            </StoreProvider>
        </ContentLayout>
    );
}

export default MyApp;

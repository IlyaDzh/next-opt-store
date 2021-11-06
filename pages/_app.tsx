import React from "react";
import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { NextPageContext } from "next";

import { ContentLayout } from "components/layout/ContentLayout/ContentLayout";
import { StoreProvider } from "stores/useStore";
import { getStores, IStores } from "stores";

import "styles/globals.scss";

export type CustomNextPageContext = NextPageContext & { mobxStores: IStores };

interface CustomAppProps extends AppProps {
    initialData: any;
}

interface CustomAppContext extends Omit<AppContext, "ctx"> {
    ctx: CustomNextPageContext;
}

class CustomApp extends App {
    static getInitialProps = async (appContext: any) => {
        // On server-side, this runs once and creates new stores
        // On client-side, this always reuses existing stores
        const mobxStores = getStores();

        // Make stores available to page's `getInitialProps`
        appContext.ctx.mobxStores = mobxStores;

        // Call "super" to run page's `getInitialProps`
        const appProps = await App.getInitialProps(appContext);

        // Gather serialization-friendly data from stores
        const initialData = {
            productStore: mobxStores.productStore.__data()
        };

        // Send it to `render`
        return {
            ...appProps,
            initialData
        };
    };

    render() {
        const { Component, pageProps, initialData } = this.props;

        // During SSR, this will create new store instances so having `initialData` is crucial.
        // During the client-side hydration, same applies.
        // From then on, calls to `getStores()` return existing instances.
        const stores = getStores(initialData);

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

                <StoreProvider value={stores}>
                    <Component {...pageProps} />
                </StoreProvider>
            </ContentLayout>
        );
    }
}

export default CustomApp;

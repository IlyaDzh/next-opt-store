import React from "react";
import App, { AppContext, AppProps } from "next/app";
import { NextPageContext } from "next";
import Head from "next/head";

import { ContentLayout } from "components/layout/ContentLayout/ContentLayout";
import { initializeStore, StoreProvider } from "stores/useStore";
import { RootStore } from "stores";
import "styles/globals.scss";

interface CustomAppContext extends AppContext {
    ctx: NextPageContext & {
        store: RootStore;
    };
}

class MyApp extends App {
    mobxStore: RootStore;

    static async getInitialProps(appContext: any) {
        const mobxStore = initializeStore();
        appContext.ctx.store = mobxStore;
        const appProps = await App.getInitialProps(appContext);

        return {
            ...appProps,
            initialMobxState: mobxStore
        };
    }

    constructor(props: any) {
        super(props);

        const isServer = typeof window === "undefined";

        this.mobxStore = isServer
            ? props.initialMobxState
            : initializeStore(props.initialMobxState);
    }

    render() {
        const { Component, pageProps } = this.props;

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

                <StoreProvider store={this.mobxStore}>
                    <Component {...pageProps} />
                </StoreProvider>
            </ContentLayout>
        );
    }
}

export default MyApp;

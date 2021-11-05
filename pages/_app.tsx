import React from "react";
import App, { AppContext } from "next/app";
import Head from "next/head";

import { ContentLayout } from "components/layout/ContentLayout/ContentLayout";
import { StoreProvider } from "stores/useStore";
import { fetchInitialStoreState, RootStore } from "stores";
import "styles/globals.scss";

class MyApp extends App {
    state = {
        rootStore: new RootStore()
    };

    // Fetching serialized(JSON) store state
    static getInitialProps = async (appContext: AppContext) => {
        // appContext.ctx.rootStore = this.state;
        const appProps = await App.getInitialProps(appContext);
        const initialStoreState = await fetchInitialStoreState();

        return {
            ...appProps,
            initialStoreState
        };
    };

    // Hydrate serialized state to store
    static getDerivedStateFromProps = (nextProps: any, prevState: any) => {
        prevState.rootStore.hydrate(nextProps.initialStoreState);

        return prevState;
    };

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

                <StoreProvider store={this.state.rootStore}>
                    <Component {...pageProps} />
                </StoreProvider>
            </ContentLayout>
        );
    }
}

export default MyApp;

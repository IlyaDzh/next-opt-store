// import React from "react";
// import type { AppProps } from "next/app";
// import Head from "next/head";

// import { ContentLayout } from "components/layout/ContentLayout/ContentLayout";
// import { StoreProvider } from "stores/useStore";
// import "styles/globals.scss";

// function MyApp({ Component, pageProps }: AppProps) {
//     return (
//         <ContentLayout>
//             <Head>
//                 <meta charSet="utf-8" />
//                 <meta
//                     name="viewport"
//                     content="width=device-width, initial-scale=1.0"
//                 />
//                 <link rel="icon" href="/favicon.ico" />
//                 <title>Оптовый магазин Саки</title>
//                 <meta name="description" content="Оптовый магазин Саки" />
//             </Head>

//             <StoreProvider {...this.mobxStore}>
//                 <Component {...pageProps} />
//             </StoreProvider>
//         </ContentLayout>
//     );
// }

// export default MyApp;






import React from "react";
import App, { AppProps, Container } from "next/app";
import { Provider } from "mobx-react";

import initializeStore from "stores";

class CustomApp extends App {
    static async getInitialProps(appContext) {
        const mobxStore = initializeStore();

        appContext.ctx.mobxStore = mobxStore;

        const appProps = await App.getInitialProps(appContext);

        return {
            ...appProps,
            initialMobxState: mobxStore
        };
    }

    constructor(props: AppProps) {
        super(props);

        const isServer = typeof window === "undefined";

        this.mobxStore = isServer
            ? props.initialMobxState
            : initializeStore(props.initialMobxState);
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Provider {...this.mobxStore}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        );
    }
}

export default CustomApp;

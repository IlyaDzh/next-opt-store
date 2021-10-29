import React from "react";

import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

import styles from "components/Layout/Layout.module.scss";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
};

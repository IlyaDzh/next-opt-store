import React from "react";

import { Header } from "components/layout/Header/Header";
import { Footer } from "components/layout/Footer/Footer";

import styles from "components/layout/ContentLayout/ContentLayout.module.scss";

export const ContentLayout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
};

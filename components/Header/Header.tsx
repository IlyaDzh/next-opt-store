import React from "react";
import Link from "next/link";

import { Container } from "components/Container/Container";
import styles from "components/Header/Header.module.scss";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <Container>
                    <div className={styles.topLinks}>
                        <Link href="/about">
                            <a className="paragraph-small-font">О нас</a>
                        </Link>
                        <Link href="/shipping">
                            <a className="paragraph-small-font">Доставка</a>
                        </Link>
                        <Link href="/payment">
                            <a className="paragraph-small-font">Оплата</a>
                        </Link>
                    </div>
                </Container>
            </div>
            <div className={styles.middle}>
                <Container>
                    <div className={styles.middleContent}>
                        <div>logo</div>
                        <div>search</div>
                        <div>contacts</div>
                    </div>
                </Container>
            </div>
            <div className={styles.bottom}>
                <Container>bottom</Container>
            </div>
        </div>
    );
};

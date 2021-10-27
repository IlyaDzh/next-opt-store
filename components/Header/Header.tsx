import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "components/Container/Container";
import { CATEGORIES } from "constants/categories";
import styles from "components/Header/Header.module.scss";

import HeartIcon from "public/static/icons/heart-outlined.svg";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <Container>
                    <div className={styles.topbar}>
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
                    <div className={styles.info}>
                        <div>logo</div>
                        <div>search</div>
                        <div>contacts</div>
                    </div>
                </Container>
            </div>
            <nav className={styles.bottom}>
                <Container>
                    <div className={styles.panel}>
                        <div className={styles.categories}>
                            {CATEGORIES.map(category => (
                                <Link
                                    key={category.slug}
                                    href={`/category/${category.slug}`}
                                >
                                    <a
                                        className={clsx(
                                            styles.button,
                                            "paragraph-medium-font"
                                        )}
                                    >
                                        {category.title}
                                    </a>
                                </Link>
                            ))}
                        </div>
                        <div className={styles.indicators}>
                            <Link href="/wishlists">
                                <a className={styles.button}>
                                    <HeartIcon width={20} height={20} fill="#3d464d" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    );
};

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "components/layout/Container/Container";
import { TextField } from "components/common/TextField/TextField";
import { CATEGORIES } from "constants/categories";
import { ERoute } from "enum/route";
import { formatRoute } from "utils/formatRoute";
import styles from "components/layout/Header/Header.module.scss";

import HeartIcon from "public/static/icons/heart-outlined.svg";
import CartIcon from "public/static/icons/cart-outlined.svg";
import UserIcon from "public/static/icons/user-outlined.svg";
import SearchIcon from "public/static/icons/search.svg";

export const Header: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);

    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = () => {
            if (window.pageYOffset > headerRef.current!.offsetHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handler);

        return () => {
            window.removeEventListener("scroll", handler);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={clsx(styles.header, isSticky && styles.sticky)}
        >
            <div className={styles.top}>
                <Container>
                    <div className={styles.topbar}>
                        <div>
                            <Link href={ERoute.About}>
                                <a className="paragraph-small-font">О нас</a>
                            </Link>
                            <Link href={ERoute.Shipping}>
                                <a className="paragraph-small-font">Доставка</a>
                            </Link>
                            <Link href={ERoute.Payment}>
                                <a className="paragraph-small-font">Оплата</a>
                            </Link>
                        </div>
                        <div>
                            <Link href={ERoute.Login}>
                                <a className="paragraph-small-font">
                                    Войти | Зарегистрироваться
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={styles.middle}>
                <Container>
                    <div className={styles.info}>
                        <Link href={ERoute.Main}>
                            <a className={styles.logo}>SAKI.OPT</a>
                        </Link>
                        <div className={styles.search}>
                            <TextField
                                placeholder="Поиск товара по каталогу"
                                icon={<SearchIcon width={20} height={20} />}
                                onIconClick={() => alert("search...")}
                                fullWidth
                            />
                        </div>
                        <div className={styles.contact}>
                            <h6 className={styles.title}>Связь с нами</h6>
                            <a href="tel:+79789999999" className="headline-5-font">
                                +7 (978) 999-99-99
                            </a>
                        </div>
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
                                    href={formatRoute(
                                        ERoute.Category,
                                        category.slug
                                    )}
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
                            <Link href={ERoute.Wishlists}>
                                <a className={styles.button}>
                                    <HeartIcon
                                        width={20}
                                        height={20}
                                        fill="#3d464d"
                                    />
                                    <span className={styles.value}>0</span>
                                </a>
                            </Link>
                            <Link href={ERoute.Cart}>
                                <a className={styles.button}>
                                    <CartIcon
                                        width={20}
                                        height={20}
                                        fill="#3d464d"
                                    />
                                    <span className={styles.value}>0</span>
                                </a>
                            </Link>
                            <Link href={ERoute.Login}>
                                <a className={styles.button}>
                                    <UserIcon
                                        width={20}
                                        height={20}
                                        fill="#3d464d"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    );
};

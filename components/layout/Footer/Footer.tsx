import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "components/layout/Container/Container";
import { TextField } from "components/common/TextField/TextField";
import { Button } from "components/common/Button/Button";
import { ERoute } from "enum/route";
import { CATEGORIES } from "constants/categories";
import { formatRoute } from "utils/formatRoute";
import styles from "components/layout/Footer/Footer.module.scss";

import TelegramIcon from "public/static/icons/socials/telegram.svg";
import ViberIcon from "public/static/icons/socials/viber.svg";
import WhatsAppIcon from "public/static/icons/socials/whatsapp.svg";
import VkIcon from "public/static/icons/socials/vkontakte.svg";
import InstagramIcon from "public/static/icons/socials/instagram.svg";

import EnvelopeIcon from "public/static/icons/envelope-outlined.svg";
import PhoneIcon from "public/static/icons/phone-outlined.svg";
import ClockIcon from "public/static/icons/clock-outlined.svg";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <Link href={ERoute.Main}>
                        <a className={styles.logo}>SAKI.OPT</a>
                    </Link>
                    <div className={styles.contacts}>
                        <p
                            className={clsx(
                                styles.description,
                                "paragraph-medium-font"
                            )}
                        >
                            Интернет-магазин Saki.Opt – это доступные цены, широкий,
                            регулярно обновляемый ассортимент. Покупателям
                            предлагается электроника, одежда, детские и медицинские
                            товары.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <span className={styles.icon}>
                                    <EnvelopeIcon height={18} />
                                </span>
                                <a href="mailto:sakiopt@example.com">
                                    sakiopt@example.com
                                </a>
                            </li>
                            <li className={styles.item}>
                                <span className={styles.icon}>
                                    <PhoneIcon height={18} />
                                </span>
                                <a href="tel:+79789999999">+7 (978) 999-99-99</a>
                            </li>
                            <li className={styles.item}>
                                <span className={styles.icon}>
                                    <ClockIcon height={18} />
                                </span>
                                Пн-Вск 09:00 - 20:00
                            </li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <ul>
                            <li className={styles.link}>
                                <Link href={ERoute.Login}>
                                    <a>Войти</a>
                                </Link>
                            </li>
                            <li className={styles.link}>
                                <Link href={ERoute.About}>
                                    <a>О нас</a>
                                </Link>
                            </li>
                            <li className={styles.link}>
                                <Link href={ERoute.Shipping}>
                                    <a>Доставка</a>
                                </Link>
                            </li>
                            <li className={styles.link}>
                                <Link href={ERoute.Payment}>
                                    <a>Оплата</a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            {CATEGORIES.map(category => (
                                <li key={category.slug} className={styles.link}>
                                    <Link
                                        href={formatRoute(
                                            ERoute.Category,
                                            category.slug
                                        )}
                                    >
                                        <a>{category.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.newsletter}>
                        <div className={styles.telegram}>
                            <p
                                className={clsx(
                                    styles.title,
                                    "paragraph-medium-font"
                                )}
                            >
                                Хотите быть в курсе всех акций и скидок? <br />
                                Подпишитесь на наш канал в Telegram
                            </p>
                            <div className={styles.form}>
                                <TextField
                                    defaultValue="https://t.me/sakiopt"
                                    readOnly
                                    fullWidth
                                />
                                <Button
                                    className={styles.subscribe}
                                    variant="contained"
                                >
                                    Подписаться
                                </Button>
                            </div>
                        </div>
                        <div className={styles.socials}>
                            <p
                                className={clsx(
                                    styles.title,
                                    "paragraph-medium-font"
                                )}
                            >
                                Присоединяйтесь к нам в соц. сетях
                            </p>
                            <div className={styles.list}>
                                <a
                                    href="#"
                                    className={clsx(
                                        styles.social,
                                        styles.socialTelegram
                                    )}
                                    target="_blank"
                                >
                                    <TelegramIcon />
                                </a>
                                <a
                                    href="#"
                                    className={clsx(
                                        styles.social,
                                        styles.socialViber
                                    )}
                                    target="_blank"
                                >
                                    <ViberIcon />
                                </a>
                                <a
                                    href="#"
                                    className={clsx(
                                        styles.social,
                                        styles.socialWhatsApp
                                    )}
                                    target="_blank"
                                >
                                    <WhatsAppIcon />
                                </a>
                                <a
                                    href="#"
                                    className={clsx(styles.social, styles.socialVk)}
                                    target="_blank"
                                >
                                    <VkIcon />
                                </a>
                                <a
                                    href="#"
                                    className={clsx(
                                        styles.social,
                                        styles.socialInstagram
                                    )}
                                    target="_blank"
                                >
                                    <InstagramIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

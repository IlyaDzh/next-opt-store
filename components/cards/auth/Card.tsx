import React from "react";
import clsx from "clsx";

import { Button } from "components/common/Button/Button";
import styles from "components/cards/auth/Card.module.scss";

interface CardProps {
    title: string;
    buttonText: string;
    onSubmit: () => void;
}

export const Card: React.FC<CardProps> = ({
    title,
    buttonText,
    onSubmit,
    children
}) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <article className={styles.card}>
            <h3 className={clsx(styles.title, "headline-3-font")}>{title}</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.content}>{children}</div>
                <div>
                    <Button type="submit" variant="contained">
                        {buttonText}
                    </Button>
                </div>
            </form>
        </article>
    );
};

import React from "react";

import { Card } from "components/cards/auth/Card";
import { TextField } from "components/common/TextField/TextField";
import styles from "components/cards/auth/Card.module.scss";

export const RegisterCard: React.FC = () => {
    return (
        <Card
            title="Регистрация"
            buttonText="Зарегистрироваться"
            onSubmit={() => console.log("submit")}
        >
            <TextField
                wrapperClass={styles.input}
                labelText="Email адрес"
                labelFor="register-email"
                placeholder="Введите email"
                fullWidth
            />
            <TextField
                wrapperClass={styles.input}
                type="password"
                labelText="Пароль"
                labelFor="register-password"
                placeholder="Пароль"
                fullWidth
            />
            <TextField
                type="password"
                labelText="Повторите пароль"
                labelFor="register-repeat-password"
                placeholder="Пароль"
                fullWidth
            />
        </Card>
    );
};

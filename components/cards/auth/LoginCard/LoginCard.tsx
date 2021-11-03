import React from "react";

import { Card } from "components/cards/auth/Card";
import { TextField } from "components/common/TextField/TextField";
import { Checkbox } from "components/common/Checkbox/Checkbox";
import styles from "components/cards/auth/Card.module.scss";

export const LoginCard: React.FC = () => {
    return (
        <Card title="Вход" buttonText="Войти" onSubmit={() => console.log("submit")}>
            <TextField
                wrapperClass={styles.input}
                labelText="Email адрес"
                labelFor="login-email"
                placeholder="Введите email"
                fullWidth
            />
            <TextField
                wrapperClass={styles.input}
                type="password"
                labelText="Пароль"
                labelFor="login-password"
                placeholder="Пароль"
                fullWidth
            />
            <Checkbox>Запомнить меня</Checkbox>
        </Card>
    );
};

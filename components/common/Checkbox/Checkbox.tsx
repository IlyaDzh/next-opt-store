import React from "react";
import clsx from "clsx";

import styles from "components/common/Checkbox/Checkbox.module.scss";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<CheckboxProps> = ({
    children,
    disabled,
    ...props
}) => {
    return (
        <label className={clsx(styles.checkbox, disabled && styles.disabled)}>
            <input
                className={styles.input}
                type="checkbox"
                disabled={disabled}
                {...props}
            />
            <span className={styles.checkmark} />
            {children}
        </label>
    );
};

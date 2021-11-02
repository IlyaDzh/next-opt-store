import React from "react";
import clsx from "clsx";

import styles from "components/common/TextField/TextField.module.scss";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
    icon?: React.ReactNode;
    wrapperClass?: string;
    onIconClick?: (e: any) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
    fullWidth = false,
    icon,
    onIconClick,
    wrapperClass,
    className,
    disabled,
    ...props
}) => {
    return (
        <div
            className={clsx(
                styles.field,
                fullWidth && styles.fullWidth,
                icon && styles.withIcon,
                disabled && styles.disabled,
                wrapperClass
            )}
        >
            <input
                className={clsx(styles.input, className)}
                type="text"
                disabled={disabled}
                {...props}
            />
            <span className={styles.border} />
            {icon &&
                (onIconClick ? (
                    <button
                        type="button"
                        onClick={onIconClick}
                        className={styles.icon}
                    >
                        {icon}
                    </button>
                ) : (
                    <div className={styles.icon}>{icon}</div>
                ))}
        </div>
    );
};

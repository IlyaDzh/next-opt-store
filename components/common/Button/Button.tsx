import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { Loader } from "components/common/Loader/Loader";
import styles from "components/common/Button/Button.module.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "contained" | "transparent";
    icon?: React.ReactNode;
    fullWidth?: boolean;
    fullHeight?: boolean;
    size?: "large" | "medium" | "small";
    to?: string;
    isLoading?: boolean;
}

const LOADER_SIZES = {
    large: 28,
    medium: 22,
    small: 16
};

export const Button: React.FC<ButtonProps> = ({
    children,
    icon,
    variant = "default",
    fullWidth = false,
    fullHeight = false,
    size = "medium",
    to,
    isLoading = false,
    className,
    onClick,
    ...props
}) => {
    const wrapper = (button: React.ReactElement) => {
        if (to) {
            return <Link href={to}>{button}</Link>;
        }

        return button;
    };

    return wrapper(
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                fullWidth && styles.fullWidth,
                fullHeight && styles.fullHeight,
                isLoading && styles.loading,
                icon && styles.icon,
                className
            )}
            {...(!isLoading && { onClick })}
            {...props}
        >
            {isLoading && (
                <span className={styles.loader}>
                    <Loader size={LOADER_SIZES[size]} />
                </span>
            )}
            {icon || children}
        </button>
    );
};

import React from "react";

import styles from "components/common/Loader/Loader.module.scss";

export interface LoaderProps {
    size?: number;
}

export const Loader: React.FC<LoaderProps> = ({ size = 40, ...props }) => {
    return (
        <div
            className={styles.loader}
            style={{ width: size, height: size }}
            {...props}
        />
    );
};

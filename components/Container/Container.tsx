import React from "react";
import clsx from "clsx";

import styles from "components/Container/Container.module.scss";

interface ContainerProps {
    wrapperClass?: string;
}

export const Container: React.FC<ContainerProps> = ({ wrapperClass, children }) => {
    return <div className={clsx(styles.container, wrapperClass)}>{children}</div>;
};

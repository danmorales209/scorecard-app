import React from "react";

import styles from './Row.module.scss';

const Row = ({
    classNames,
    children,
    reverse = false,
    ...props,
}) => {

    const rowClassNames = [
        reverse ? styles['row-reverse'] : styles.row,
        ...classNames,
    ].join(' ');

    return (
        <div 
            className={rowClassNames}
        >
            {children}
        </div>
    );
};

export default Row;
import React from "react";
import styles from './Container.module.scss';

const Container = ({
    children,
    classNames,
    display,
    ...props
}) => {
    
    const containerClasses = [
        ...classNames,
        ...(display ? styles[`display-${display}`] : []),
    ].join(' ');

    return (
        <div
            className={containerClasses}
        >
            {children}
        </div>
    );
};

export default Container;
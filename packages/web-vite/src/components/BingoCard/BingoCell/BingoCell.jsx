import React, { useState } from "react";

import styles from './BingoCell.module.scss';

console.log(styles)

const BingoCell = ({
    data,
}) => {

    const [isHighLighted, setIsHighlighted] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsHighlighted(previous => !previous);
    }


    return (
        <td>
            <div className={styles.flexContainer}>
                <button
                    className={styles.button}
                    onClick={handleClick}
                    style={{
                        backgroundColor: isHighLighted ? 'green' : 'transparent',
                        color: isHighLighted ? 'white' : 'black',
                    }}  >
                    {data}
                </button>

            </div>
        </td>
    )
};

export default BingoCell;
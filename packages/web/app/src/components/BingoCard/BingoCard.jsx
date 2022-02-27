import React, { useState } from "react";
import faker from 'faker';

import { BingoCell } from "./index";
import {generateRandomSet} from '../../mocks';

import styles from './BingoCard.module.scss';

const fiveShell = { length: 5 };
const dummyData = generateRandomSet(5, {freeSpaceRow: 2, freeSpaceCell: 2})

console.log(dummyData);

const BingoCard = (props) => {
    const [options, setOptions] = useState(dummyData);
    return (
        <div className={styles.test}>
            <table>
                <thead>
                    <tr>
                        <th>B</th>
                        <th>I</th>
                        <th>N</th>
                        <th>G</th>
                        <th>O</th>
                    </tr>
                </thead>
                <tbody>
                    {options.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <BingoCell
                                    key={cellIndex}
                                    data={cell}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default BingoCard;

import React, {useState} from "react";

const BingoCell = ({
    data,
}) => {

    const [isHighLighted, setIsHighlighted] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsHighlighted(previous => !previous)
    }

    
    return (
        <td
            onClick={handleClick}
            style= {{
                backgroundColor: isHighLighted ? 'green' : 'transparent',
                color: isHighLighted ? 'white' : 'black',
            }}    
        >{data}</td>
    )
};

export default BingoCell;
import React, {useState} from 'react';

const getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const Figura = () => {
    const [buttonStyle, setButtonStyle] = useState('black');
    const [intervals, setIntervals] = useState(null);
    const divStyle = {
        width:'255px', 
        height:'255px',
        backgroundColor: buttonStyle,
    }

    const setBackgroundColor = () => {
        setButtonStyle(getRandomColor());
    }

    const entraRaton = () => {
        setIntervals (setInterval(() => {
            setBackgroundColor();
        }, 1000));
    }

    const saleRaton = () => {
        if(intervals) {
            clearInterval(intervals);
            setIntervals(null);
        }
    }

    const dobleClick = () => {
        if(intervals) {
            clearInterval(intervals);
            setIntervals(null);
        }
    }

    return (
        <div style={divStyle} onMouseEnter={entraRaton} onMouseLeave={saleRaton} onDoubleClick={dobleClick}></div>
    );
}

export default Figura;

import React, {useState} from 'react';

const Figura = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    let interval;

    const [buttonStyle, setButtonStyle] = useState('black');
    const divStyle = {
        width:'255px', 
        height:'255px',
        backgroundColor: buttonStyle,
    }
    function console() {
        //console.log('entra raton');
        setButtonStyle(color);
    }
    function entraRaton() {
        //console.log('entra raton');
        //setButtonStyle(color);
        //setInterval(setButtonStyle(color), 1000);
        interval = setInterval(console, 1000);
    }

    function saleRaton() {
        //console.log('sale raton');
        //setButtonStyle(buttonStyle);
        clearInterval(interval);
    }

    return (
        <div style={divStyle} onMouseEnter={entraRaton} onMouseLeave={saleRaton}></div>
    );
}

export default Figura;

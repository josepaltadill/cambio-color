import React from 'react';

const Figura = () => {
    const [buttonStyle, setButtonStyle] = useState('black');
    function entraRaton() {
        console.log('entra raton');
    }

    function saleRaton() {
        console.log('sale raton');
    }

    return (
        <div style={{width:'255px', height:'255px', backgroundColor:'black'}} onMouseEnter={entraRaton} onMouseLeave={saleRaton}></div>
    );
}

export default Figura;

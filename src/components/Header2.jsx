import React from 'react';
import { Link } from 'react-router-dom';

function Header2() {
    var header2Style = {
        height: '50px',
        gridArea: '3 / 1 / 4 / 7',
        color: 'black',
        backgroundColor: 'black',
        textAlign: 'center',
        fontSize: '30px',
        wordSpacing: '20px',
        letterSpacing: '5px',
        paddingLeft: '20px',
        padding: '30px' ,
        fontFamily: 'Montserrat, sans-serif',
        
    }
    var logoStyle = {
        float: 'left',
        textDecoration: 'none',
        color: 'white',
    };

    return (
        <div style={header2Style}>
        <Link to="/" style={logoStyle}> BioSite</Link> <Link to="/features" style={{ color: 'white', textDecoration: 'none' }}>Features</Link>  <Link to="/templates" style={{ color: 'white', textDecoration: 'none' }}>Templates</Link>  <Link to="/support" style={{ color: 'white', textDecoration: 'none' }}>Support</Link>
        </div> 
    );
}

export default Header2;
import React from 'react';
import { Link } from 'react-router-dom';
import Careers from './Careers';

function Header2() {
    var headerStyle = {
        border: 'solid lightGrey 1px',
        height: '50px',
        gridArea: '3 / 1 / 4 / 7',
        color: 'black',
        
        textAlign: 'center',
        fontSize: '30px',
        wordSpacing: '20px',
        letterSpacing: '5px',
        paddingLeft: '20px',
        padding: '30px' ,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        fontFamily: 'Montserrat, sans-serif',
    }
    return (
        <div style={headerStyle}>
        <Link to="/features" style={{ color: 'black', textDecoration: 'none' }}>Features</Link>  <Link to="/templates" style={{ color: 'black', textDecoration: 'none' }}>Templates</Link>  <Link to="/support" style={{ color: 'black', textDecoration: 'none' }}>Support</Link>  <Link to="/locations" style={{ color: 'black', textDecoration: 'none' }}>Locations</Link> 
        </div> 
    );
}

export default Header2;
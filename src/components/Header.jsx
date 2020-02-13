import React from 'react';
import { Link } from 'react-router-dom';
import Careers from './Careers';

function Header() {
    var headerStyle = {
        border: 'solid lightGrey 1px',
        height: '100px',
        gridArea: '3 / 1 / 4 / 7',
        color: 'white',
        textAlign: 'center',
        fontSize: '30px',
        wordSpacing: '20px',
        letterSpacing: '5px',
         paddingLeft: '20px',
    }
    return (
        <div style={headerStyle}>
        <Link to="/features">Features</Link>  <Link to="/templates">Templates</Link>  <Link to="/support">Support</Link>  <Link to="/locations">Locations</Link> 
        </div> 
    );
}

export default Header;
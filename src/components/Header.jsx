import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    var header2Style = {
        backgroundColor: 'white',
        height: '50px',
        gridArea: '1 / 1 / 2 / 7',
        
        textAlign: 'center',
        fontSize: '30px',
        wordSpacing: '20px',
        letterSpacing: '5px', 
        padding: '30px',
        fontFamily: 'Montserrat, sans-serif',
        border: 'solid lightGrey 1px',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none'
    };

    return (
      
      <div style={header2Style}>
      <Link to="/AboutUs" style={{ color: 'black', textDecoration: 'none' }}>AboutUs</Link>  <Link to="/Careers" style={{ color: 'black', textDecoration: 'none' }}>Careers</Link>  <Link to="/ourteam" style={{ color: 'black', textDecoration: 'none' }}>OurTeam</Link>  <Link to="/locations" style={{ color: 'black', textDecoration: 'none' }}>Locations</Link> 
      </div> 
    );
}

export default Header;
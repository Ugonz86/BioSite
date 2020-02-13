import React from 'react';
import { Link } from 'react-router-dom';
import Careers from './Careers';

function Header2() {
    var header2Style = {
        backgroundColor: 'black',
        height: '50px',
        gridArea: '1 / 1 / 2 / 7',
        color: 'white',
        textAlign: 'center',
        fontSize: '30px',
        wordSpacing: '20px',
        letterSpacing: '5px', 
        padding: '30px'   
        
    }

    var logoStyle = {
      float: 'left',
      
      
    }

    return (
      
      <div style={header2Style}>
      <span style={logoStyle}> BioSite </span>
        <Link to="/AboutUs" style={{ color: 'white', textDecoration: 'none' }}>AboutUs</Link>  <Link to="/Careers" style={{ color: 'white', textDecoration: 'none' }}>Careers</Link>  <Link to="/ourteam" style={{ color: 'white', textDecoration: 'none' }}>OurTeam</Link>  <Link to="/locations" style={{ color: 'white', textDecoration: 'none' }}>Locations</Link> 
      </div> 
    );
}

export default Header2;
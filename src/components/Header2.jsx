import React from 'react';
import { Link } from 'react-router-dom';
import Careers from './Careers';

function Header2() {
    var header2Style = {
        backgroundColor: 'black',
        height: '100px',
        gridArea: '1 / 1 / 2 / 7',
        color: 'white',
        textAlign: 'center',
        fontSize: '30px',
        wordSpacing: '20px',
        letterSpacing: '5px',    
        float: 'right'
    }

    var logoStyle = {
      float: 'left',
      paddingLeft: '20px',
      
    }

    return (
      
      <div style={header2Style}>
      <span style={logoStyle}> BioSite </span>
        <Link to="/AboutUs">AboutUs</Link>  <Link to="/Careers">Careers</Link>  <Link to="/ourteam">OurTeam</Link>  <Link to="/locations">Locations</Link> 
      </div> 
    );
}

export default Header2;
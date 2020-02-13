import React from 'react';
import Header from './Header';
import Header2 from './Header2';
import campus from '../assets/images/campus.jpg';
import pic1 from '../assets/images/pic1.png';
import twitter from '../assets/images/twitter.png';
import { Switch, Route } from 'react-router-dom';
import Careers from './Careers';
import OurTeam from './OurTeam';
import Locations from './Locations';
import Error404 from './Error404';

function App() {
    var parent = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: '100px 400px 100px 100px 400px',
        gridColumnGap: '5px',
        gridRowGap: '5px',
        // backgroundColor: 'black'
  
        }
    

    var div2 = { gridArea: '2 / 1 / 3 / 7', overflow: 'hidden'  }

    var div4 = { gridArea: '4 / 1 / 5 / 7', color: 'white', textAlign: 'center', fontSize: '40px' }

    var div5 = { gridArea: '5 / 1 / 7 / 4', backgroundColor: 'white', color: 'black', width: '700px', lineHeight: '25px',
     paddingLeft: '10px', marginLeft: '35%' }

    var div6 = { gridArea: '5 / 4 / 7 / 7', backgroundColor: 'white', color: 'black', width: '700px', lineHeight: '25px',
     paddingLeft: '10px', position: 'relative'  }
    

    var campusStyling = {
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      top: '70%',
      transform: 'translateY(-65%)'
    }

    var picStyle = {
      width: '200px',
      float: 'left',
      padding: '20px'
    }

    var twitterStyle = {
      width: '25px',

    }


    return(
        <div style={parent}>
          <Header />
          <div style={div2}> <img src={campus} style={campusStyling} alt='a intro' /> </div>
          <Header2 />
          <Switch>
              {/* <Route exact path='/' component={App} />
              <Route path='/careers' component={Careers} />
              <Route path='/ourteam' component={OurTeam} />
              <Route path='/locations' component={Locations} />
              <Route component={Error404} /> */}
          </Switch>
          <div style={div4}>Executive Team</div>
          <div style={div5}> <img src={pic1} style={picStyle} alt='a intro' />
                <h3>Anthony Casalena</h3>
                <h4> <img src={twitter} style={twitterStyle} alt='twitter logo' /> @acasalena</h4>
                <h5>FOUNDER & CHIEF EXECUTIVE OFFICER</h5>
                <p>Anthony Casalena is the Founder and CEO of Squarespace, which he started from his dorm room in 2003. During the company’s early years, Anthony acted as the sole engineer, designer, and support representative for the entire Squarespace platform. In addition to running the company and setting overall product strategy, he remains actively involved in many departments of the company that he had previously run himself. Anthony holds a Bachelor of Science in Computer Science from the University of Maryland.</p>
          </div>
          <div style={div6}> <img src={pic1} style={picStyle} alt='a intro' />
                <h3>Gavin Zuchlinski</h3>
                <h4> <img src={twitter} style={twitterStyle} alt='twitter logo' /> @gzuchlinski</h4>
                <h5>VICE PRESIDENT, ACUITY</h5>
                <p>As Vice President of Acuity, Gavin leads Squarespace's appointment scheduling product, focusing on support for service-based businesses. Before joining Squarespace, he helped small businesses offer and manage appointments online as the founder and CEO of Acuity Scheduling. Under his leadership, Acuity grew from an idea to a profitable business used to schedule tens of millions of appointments annually. Gavin, who joined Squarespace as part of the acquisition of Acuity, holds a B.S. in mathematics from Penn State University.</p>
          </div>
        </div>
        
    );
}

export default App;
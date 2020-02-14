import React from 'react';
import Header from './Header2';
import Header2 from './Header';
import campus from '../assets/images/campus.jpg';
// import pic1 from '../assets/images/pic1.png';
// import twitter from '../assets/images/twitter.png';
import { Switch, Route } from 'react-router-dom';
import Careers from './Careers';
import OurTeam from './OurTeam';
import Locations from './Locations';
import AboutUs from './AboutUs';
import Error404 from './Error404';
import Home from './Home';


function App() {
    return(
      
        <div>
          <Header2 />
          {/* <Header /> */}
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/careers' component={Careers} />
              <Route path='/ourteam' component={OurTeam} />
              <Route path='/locations' component={Locations} />
              <Route component={Error404} />
          </Switch>
          
          
        </div>
        
    );
}

export default App;
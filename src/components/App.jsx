import React from 'react';
import Header from './Header';
import Header2 from './Header2';
import { Switch, Route } from 'react-router-dom';
import Careers from './Careers';
import OurTeam from './OurTeam';
import Locations from './Locations';
import AboutUs from './AboutUs';
import Error404 from './Error404';
import Home from './Home';
import Support from './Support';
import Templates from './Templates';
import Features from './Features';

function App() {
    return(
      
        <div>
          <Header2 />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/careers' component={Careers} />
              <Route path='/ourteam' component={OurTeam} />
              <Route path='/locations' component={Locations} />
              <Route path='/features' component={Features} />
              <Route path='/templates' component={Templates} />
              <Route path='/support' component={Support} />
              <Route component={Error404} />
          </Switch>
          
          
        </div>
        
    );
}

export default App;
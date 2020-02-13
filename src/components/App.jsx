import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import GridTest from './GridTest';
import Test from './Test';
import Error404 from './Error404';


function App(){
  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route path='/gridtest' component={GridTest} />
        <Route path='/test' component={Test} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;





// This is how to use CSS modules for global scope.

// function App() {
//   return (
//    <div>
//       <style jsx global>{`
//         body {
//           font-family: Helvetica;
//         }
//         .box {
//           border: none;
//           display: block;
//           border-bottom: 2px solid #fff;
//           margin-bottom: 10px;
//         }
//         .box:hover {
//           border-bottom: 2px solid #ccc;
//           outline: 0;
//         }
//         a {
//           color: #888;
//           text-decoration: none;
//         }
//       `}</style>
//       <div style={{margin: '19px auto 0', width: 142}}>
//         <a href="https://medium.com/" target="_blank">
//           <div className="box">
//              <h1>this content will change on hover because we're using styled-jsx! It would even change if our div with className 'box' was in a nested component! So cool!</h1>
//           </div>
//         </a>
//       </div>
//   </div>
//   );
// }


import React, { Fragment } from "react";
import './App.css';
import Landing from './Components/Landing.jsx'
import Login from './Components/Login.jsx'
import Dashboardform from './Components/Dashboardform'
import Dashboard from './Components/Dashboard.jsx'
import {Route} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
       <Route exact path="/" component={Landing} />
       <Route exact path="/login" component={Login}/>
       <Route exact path="/dashboard" component={Dashboard}/>
    </div>
  );
}

export default App;

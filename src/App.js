import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import LogBook from './components/patients/LogBook';

function App() {
  return (
    <div className="App">
      <h1>Sodoc</h1>
      <Switch>
        {/* <Route exact path="/" component={Connection}/> */}
        <Route path="/logbook" component={LogBook}/>
        {/* <Route path="/dashboard" component={Dashboard} /> */}
      </Switch>

      <Link to="/logbook">Je suis patient</Link>
      {/* <Link to="/dashboard">Je suis doctor</Link> */}
    </div>
  );
}

export default App;

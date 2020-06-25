import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LogBook from './components/patients/LogBook';
import Dashboard from './components/practicioner/Dashboard'
import Connection from './components/Connection';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Connection}/>
        <Route path="/logbook" component={LogBook}/>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LogBook from './components/patients/LogBook';
import Dashboard from './components/practicioner/Dashboard'
import Connection from './components/Connection';
import PatientPageDoctor from './components/practicioner/PatientPageDoctor'
import './components/patients/BurgerMenuPatient.css'
import MessageContainerPatient from './components/patients/MessagesContainerPatient'
import DosagePatient from './components/patients/DosagePatient'
import AppointmentPatient from './components/patients/AppointmentPatient';
import MessagesContainerUrgent from './components/practicioner/MessagesContainerUrgent';
import InfosDoctor from './components/practicioner/InfosDoctor';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Connection} />
        {/* patients routes */}
        <Route path="/logbook" component={LogBook} />
        <Route path="/mymessages" component={MessageContainerPatient} />
        <Route path="/mydosages" component={DosagePatient} />
        <Route path="/myappointements" component={AppointmentPatient} />
        {/* <Route path="/myinfos" component={MyInfos} /> */}


        {/* practicioner routes */}
        <Route path="/dashboard/patient/:id" component={PatientPageDoctor} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/practitioner/messages" component={MessagesContainerUrgent} />
        <Route path="/practiotioner/patients" component={InfosDoctor} />
        {/* <Route path="/practiotioner/infos" component={MyInfos} /> */}
      </Switch>
    </div>
  );
}

export default App;

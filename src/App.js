import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LogBook from './components/patients/LogBook';
import Dashboard from './components/practicioner/Dashboard'
import Connection from './components/Connection';
import PatientPage from './components/practicioner/PatientPage'
import './components/patients/BurgerMenuPatient.css'
import MessageContainerPatient from './components/patients/MessagesContainerPatient'
import DosagePatient from './components/patients/DosagePatient'
import AppointmentPatient from './components/patients/AppointmentPatient';
import MessagesContainerUrgent from './components/practicioner/MessagesContainerUrgent';
import InfosDoctor from './components/practicioner/InfosDoctor';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="App">
      <p>{width}</p>
      <Switch>
        <Route exact path="/" component={Connection} />
        {/* patients routes */}
        { width < 640 ? <Route path="/logbook" component={MessageContainerPatient} /> : <Route path="/logbook" component={LogBook} /> }
        {/* <Route path="/logbook" component={LogBook} />
        <Route path="/mymessages" component={MessageContainerPatient} /> */}
        <Route path="/mydosages" component={DosagePatient} />
        <Route path="/myappointements" component={AppointmentPatient} />
        {/* <Route path="/myinfos" component={MyInfos} /> */}


        {/* practicioner routes */}
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/dashboard/patient" component={PatientPage} /> */}
        <Route path="/practitioner/messages" component={MessagesContainerUrgent} />
        <Route path="/practiotioner/patients" component={InfosDoctor} />
        {/* <Route path="/practiotioner/infos" component={MyInfos} /> */}
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from 'react-router-dom'
import PatienList from './components/PatienList';
import CreatePatient from './components/CreatePatient';

function App() {
  return (
    <Router>

      <Switch>

        <Route path="/inicio">
          Estas en Inicio
        </Route>
        <Route exact path="/" >
            <PatienList/>
        </Route>
        <Route path="/createPatient" >
            <CreatePatient/>
        </Route>
      </Switch>

       
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from 'react-router-dom'
import PatienList from './components/PatienList';

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
        
      </Switch>

       
    </Router>
  );
}

export default App;

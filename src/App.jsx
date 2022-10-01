
import React from 'react';
import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app__body">

        <Router>
            <Sidebar />
          <Switch>
            <Route exact path='/rooms/:roomId' component={Chat}/>
            <Route exact path='/' component={Chat}/>
          
          </Switch>
        </Router>
      </div>

    </div>
  );
}

export default App;

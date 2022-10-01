
import React, { useState } from 'react';
import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  
  // const [user,setUSer] = useState(null);
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/> 
      ) : (
        <div className="app__body">

        <Router>
            <Sidebar />
          <Switch>
            <Route exact path='/rooms/:roomId' component={Chat}/>
            <Route exact path='/' component={Chat}/>
          
          </Switch>
        </Router>
      </div>
      )}
     

    </div>
  );
}

export default App;

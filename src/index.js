import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer from './reducer';
import { initialState } from './reducer';
import { StateProvider } from './StateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer = {reducer}>

    <App />
    </StateProvider>
  </React.StrictMode>
);


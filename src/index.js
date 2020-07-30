import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PetsList from './PetsList';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr />
    <PetsList />
  </React.StrictMode>,
  document.getElementById('root')
);

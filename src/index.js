import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import PetsList from './PetsList';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <PetsList />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import Main from './components/Main/Main';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Main/>}/>
      <Route exact path="/happyBirthdayMommy" render={() => <Main/>}/>
    </BrowserRouter>
  );
}

export default App;

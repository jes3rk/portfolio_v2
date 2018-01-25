import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Landing}/>
    </Router>
  );
}

export default App;

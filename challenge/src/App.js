import './App.css';
import React from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import CreateUsers from './components/CreateUsers';

function App() {
  return (
    <>
    
    <Header/>
    <Route path={'/home'} component ={Home}></Route>
    <Route path={'/users'} component={Users}></Route>
    <Route path={'/createUsers'} component={CreateUsers}></Route>
    
    </>
  );
}

export default App;

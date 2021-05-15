import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/*
todo 1: nav bar(header)
todo 2: slider
todo 3: viewer
todo 4: move list
*/

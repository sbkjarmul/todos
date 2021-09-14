import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TodoPage } from './components/TodoPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/todo' component={TodoPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;

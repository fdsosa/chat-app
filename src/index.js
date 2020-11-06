import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signUp';
import LogIn from './pages/logIn';
import Chat from './pages/chat';
import reportWebVitals from './reportWebVitals';

const routing = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component={LogIn} exact/>
      <Route path="/signup" component={SignUp} exact/>
      <Route path="/chat" component={Chat} exact/>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

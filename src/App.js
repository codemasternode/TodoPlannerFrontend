import React, { Component } from 'react';
import CssModules from 'react-css-modules'
import CssRoot from './css/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Login from './components/Login'
import Nav from './components/Nav'
import Register from './components/Register'
import Footer from './components/Footer'
import DayTodos from './components/todosComponents/DayTodos'
import MonthTodos from './components/todosComponents/MonthTodos'
import LongTodos from './components/todosComponents/LongTodos'

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div ref="body">
          <Nav body={this.refs.body} />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default CssModules(App, CssRoot);

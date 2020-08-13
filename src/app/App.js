import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch, NavLink} from "react-router-dom";
import Home from "./Home";
import Calculator from './components/calculator/Calculator';
import Timer from './components/timer/Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className='navbar navbar-light' style={{background: '#e3f2fd', textAlign: 'right'}}>
            <NavLink activeClassName="activeLink" to='/'>Home</NavLink>
            <NavLink activeClassName="activeLink" to='/online-calculator'>Online Calculator</NavLink>
            <NavLink activeClassName="activeLink" to='/online-timer'>Online Timer</NavLink>
          </nav>
          
          <Route exact path='/' component={Home}/>
          <Switch>
            <Route exact path='/online-calculator' component={Calculator}/>
            <Route exact path='/online-timer' component={Timer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

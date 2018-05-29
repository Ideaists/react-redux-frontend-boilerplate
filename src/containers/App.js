import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import HomePage from './home'
import AboutPage from './about'
import LoginPage from './login'
import RegisterPage from './register'
import TermsAndConditionsPage from './terms-and-conditions'
import PrivacyPolicyPage from './privacy-policy'
import NotFoundPage from './not-found'
import { Provider } from 'react-redux';
import './style.css'
import store from '../store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="base">
            <header>
              <h1>Ideaists React with Redux Front-End Boilerplate</h1>
                <Link to='/'>Home</Link>&nbsp;
                <Link to='/about'>About</Link>&nbsp;
                <Link to='/login'>Login</Link>&nbsp;
                <Link to='/register'>Register</Link>&nbsp;
                <Link to='/terms-and-conditions'>Terms and Conditions</Link>&nbsp;
                <Link to='/privacy-policy'>Privacy Policy</Link>&nbsp;
            </header>
            <br /><hr />
            <div className="container">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/terms-and-conditions" component={TermsAndConditionsPage} />
                <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
            <footer>
              <br /><hr />
              Ideaists (c) 2018
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
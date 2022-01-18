import axios from 'axios';
import React from 'react';
import { config } from './Constants';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard.js'
import Tag from "./components/Tag.js"
import Index from './components/index.js'
import LoginPage from './components/LoginPage.js'
import Unauthorised from './components/Unauthorised.js';



export default class App extends React.Component {
  API_LOGIN_URL = config.url.API_LOGIN_URL; 
  constructor(props) {
      super(props);
      this.state = {
        loggedInStatus: "NOT_LOGGED_IN", 
        user: {}
      }
      this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    // this.checkLoginStatus()
  }


  handleLogin(data) {
    localStorage.setItem('token', data.user.token)
    this.setState({
        loggedInStatus: "LOGGED_IN", 
        user: data.user, 
    });
  }


  checkLoginStatus() {
    axios
    .get(this.API_LOGIN_URL, { withCredentials: true })
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN", 
          user: response.data.user
        })
      }
      else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN", 
          user: {}
        })
      }
    })
    .catch(error => console.log(error));
  }


  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route 
              exact 
              path={'/'} 
              element={
                <Index {...this.props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}> </Index>
              }
              />
            <Route 
              exact 
              path={'/Dashboard'} 
              element={ <Dashboard {...this.props} loggedInStatus={this.state.loggedInStatus} user={this.state.user}/> }/>
            <Route 
              exact 
              path={'/LoginPage'} 
              element={ <LoginPage {...this.props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/> }/>
            <Route
             exact 
             path={'/Tags'} 
             element={ <Tag {...this.props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/> }/>
            <Route 
              exact 
              path={'/Unauthorised'}
              element={ <Unauthorised />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
};


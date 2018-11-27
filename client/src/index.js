import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/loginComponent';
import Parent from './components/mainparentComponent';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './styles/appComponentStyle.css';
import 'react-toastify/dist/ReactToastify.min.css'; 
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {
  state ={
    loggedin:false,
    dataUser:[],
  }
  _isLoggedIn = (condition) => {
    this.setState({loggedin:condition})
  }

  _userData = (value) => {
    this.setState({dataUser:value});
  }
  render() {
    return (
      <Router>
        <div className="wadah">
          <Route exact path='/' render={
                                        ()=> this.state.loggedin ? (<Parent/>) : 
                                                                   (<Redirect to='/login'/>)}/>
          <Route path='/login' render={()=>(<Login changeLogStatus={this._isLoggedIn} changeDataStatus={this._userData}/>)}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));

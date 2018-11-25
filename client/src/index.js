import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/sidebarComponent';
import Login from './components/loginComponent';
import MainMenu from './components/mainmenuComponent';
import './styles/appComponentStyle.css';

class App extends Component {
  render() {
    return (
      <div className="wadah">
        <Login/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));

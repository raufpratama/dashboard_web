import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './sub_components/headerComponent';
import Edit from './sub_components/editComponent';
import Context from './sub_components/contextComponent';
import List from './sub_components/listComponent';
import '../styles/mainmenuComponentStyle.css';

class MainMenu extends Component {
  render() {
    return (
      <Router>
        <div id="mainmenu">
          <Header/>
          <div className="route">
            <Route exact path="/" component={List}/>
            <Route path="/edit/:id" component={Edit}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default MainMenu;

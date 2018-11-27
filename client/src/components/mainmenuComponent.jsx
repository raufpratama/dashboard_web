import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './sub_components/headerComponent';
import Edit from './sub_components/editComponent';
import Context from './sub_components/contextComponent';
import Add from './sub_components/addComponent';
import List from './sub_components/listComponent';
import '../styles/mainmenuComponentStyle.css';

const MainMenu = () => (
        <Router>
          <div id="mainmenu">
            <Header/>
            <div className="route">
              <Route exact path="/" component={List}/>
              <Route path="/edit/:id" component={Edit}/>
              <Route path="/add_user" component={Add}/>
            </div>
          </div>
        </Router>
    );

export default MainMenu;

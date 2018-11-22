import React, { Component } from 'react';
import Header from './sub_components/headerComponent';
import Context from './sub_components/contextComponent';
import List from './sub_components/listComponent';
import '../styles/mainmenuComponentStyle.css';

class MainMenu extends Component {
  render() {
    return (
      <div id="mainmenu">
        <Header/>
        <List/>
      </div>
    )
  }
}

export default MainMenu;

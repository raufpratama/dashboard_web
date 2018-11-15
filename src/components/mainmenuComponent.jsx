import React, { Component } from 'react';
import Header from './sub_components/headerComponent';
import Context from './sub_components/contextComponent';
import '../styles/mainmenuComponentStyle.css';

class MainMenu extends Component {
  render() {
    return (
      <div id="mainmenu">
        <Header/>
        <Context/>
      </div>
    )
  }
}

export default MainMenu;

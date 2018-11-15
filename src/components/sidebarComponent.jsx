import React, { Component } from 'react';
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { FaAlignJustify } from 'react-icons/fa';
import '../styles/sidebarComponentStyle.css';
import logo from '../img/dash.png';
let image = <img src={logo} width='130' height='40'/>

class SideBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="title_container">
          <div className="title">
            <NavbarBrand>{image}</NavbarBrand>
          </div>
        </div>
        <div>
          <div className="admin_user">
            <img src={'https://i.pinimg.com/originals/be/a5/9f/bea59f571a410a47cd78e513d6b46548.jpg'} width='65' height='65' className="img-circle"/>
            <div className="caption_user">
              <strong>Kaneki Ken</strong>
              <p>Administrator</p>
            </div>
          </div>
          <hr/>
        </div>
        <div className="menu">
          <a href="#" className="navItem">
            <FaAlignJustify className="react-icons" size='15'/>  Dashboard
          </a>
        </div>
      </div>
    )
  }
}

export default SideBar;

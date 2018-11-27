import React, { Component } from 'react';
import { NavbarBrand, NavItem, NavLink, Button, Collapse } from 'reactstrap';
import { FaAlignJustify } from 'react-icons/fa';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import '../styles/sidebarComponentStyle.css';
import logo from '../img/dash.png';
let image = <img src={logo} width='130' height='40'/>
let babi = "http://www.urbannews.co.id/wp-content/uploads/2014/12/6-Masalah-Kesehatan-Terdapat-di-Daging-Babi-770x470.jpg";

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapse:false,
      data_user:props.data_user,
    }
  }

  toggle = () => {
    this.setState({
      collapse:!this.state.collapse
    });
  }
  render() {
    const {data_user} = this.state;
    return (
      <div className="container">
        <div className="title_container">
          {console.log(this.state.data_user)}
          <div className="title">
            <NavbarBrand>{image}</NavbarBrand>
          </div>
        </div>
        <div>
          <div className="admin_user">
            <img src={babi} width='65' height='65' className="img-circle"/>
            <div className="caption_user">
              <strong>{data_user.username}</strong>
              <p>{data_user.email}</p>
            </div>
          </div>
          <hr/>
        </div>
        <div className="menu">
          <a className="navItem">
            <Button color="link" id="button_dash_collapse" onClick={this.toggle}>
              <FaAlignJustify className="react-icons" size='15'/>  Dashboard  {this.state.collapse ? <MdArrowDropUp className="dropdown" size="20"/> : <MdArrowDropDown className="dropdown" size="20"/>}
            </Button>
          </a>
          <Collapse isOpen={this.state.collapse}>
            <NavItem>
              <NavLink href="/" className="toggle_item">All data</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="toggle_item">mantap betul</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="toggle_item">mantap betul</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="toggle_item">mantap betul</NavLink>
            </NavItem>
          </Collapse>
        </div>
      </div>
    )
  }
}

export default SideBar;

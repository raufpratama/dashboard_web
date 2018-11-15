import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Collapse,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import '../../styles/headerComponentStyle.css';

class Header extends Component {
  state = {
    modalVisible:false,
  }

  _clickModal = () => {
    this.setState({
      modalVisible:!this.state.modalVisible,
    });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <div>
        <Navbar light expand="md" id='header' className="color_header">
          <NavbarBrand href="/">Dashboard</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Button color="danger" size="md" onClick={this._clickModal}>logout</Button>
            <Modal isOpen={this.state.modalVisible} fade={false} toggle={this._clickModal}>
              <ModalHeader toggle={this._clickModal}>Attention</ModalHeader>
              <ModalBody>
                Are you sure want to logout ?
              </ModalBody>
              <ModalFooter>
                <NavLink href="/"><Button color="warning" size="md">Yes</Button></NavLink>
                <Button color="info" size="md" onClick={this._clickModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header;

import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';
import '../../styles/contextComponentStyle.css';

class Context extends Component {
  state = {
    text:'halo dunia',
  }
  render() {
    return (
      <div id="context">
        <Breadcrumb>
          <BreadcrumbItem><a href="#">dashboard</a></BreadcrumbItem>
          <BreadcrumbItem active>data</BreadcrumbItem>
        </Breadcrumb>
        <h2>Data User</h2>
        <div className="form_context">
            <p>{this.state.text}</p>
            <Col sm="12" md={{size:6, offset:3}}>
              <Form>
                <FormGroup>
                  <label for="nama">Name</label>
                  <Input id="nama" type="text" name="input_nama" placeholder="insert name" onChange={(e)=> this.setState({text:e.target.value})}/>
                </FormGroup>
                <FormGroup>
                  <label for="username">Username</label>
                  <Input id="username" type="text" name="username" placeholder="insert username"/>
                </FormGroup>
                <FormGroup>
                  <label for="email">Email</label>
                  <Input id="email" type="text" name="email" placeholder="insert email"/>
                </FormGroup>
                <FormGroup>
                  <label for="address">Address</label>
                  <Input id="address" type="text" name="address" placeholder="insert address"/>
                </FormGroup>
                <FormGroup>
                  <label for="phone">Phone</label>
                  <Input id="phone" type="text" name="phone" placeholder="insert phone number"/>
                </FormGroup>
              </Form>
            </Col>
        </div>
      </div>
    )
  }
}

export default Context;

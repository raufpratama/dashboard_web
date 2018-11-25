import React, {Component} from 'react';
import { Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import 'react-toastify/dist/ReactToastify.css'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama:'',
            umur:'',
            pendidikan:'',
            alamat:'',
            form:true,
        }
    }

    _onFormSubmit = (e) => {
        e.preventDefault();
        const {nama,umur,pendidikan,alamat} = this.state;

        if(nama.length>0 && umur.length >0&& pendidikan.length >0&& alamat.length >0) {
            axios.post('/add_user',{
                nama,
                umur,
                pendidikan,
                alamat
            })
            .then(response=> {
                console.log(`berhasil menambah data ${response}`)
                this.props.history.push('/');
                toast.success("Berhasil menambah data");
            })
            .catch(err=>console.log(`terjadi kesalaham ${err}`))
        } else {
            this.setState({form:!this.state.form})
        }
    }

    _checkForm = () => {
        const {nama,umur,pendidikan,alamat} = this.state;
        if(nama.length>0 && umur.length >0&& pendidikan.length >0&& alamat.length >0) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        return(
            <div>
                <h2>
                    Add Data
                </h2>
                <Col md="6" sm="12" lg="6">
                    <Form onSubmit={this._onFormSubmit}>
                        <FormGroup>
                            <label>Name</label>
                            <Input type="text" onChange={(e)=>this.setState({nama:e.target.value})} placeholder="insert name"/>
                        </FormGroup>
                        <FormGroup>
                            <label>Age</label>
                            <Input type="text" onChange={(e)=>this.setState({umur:e.target.value})} placeholder="insert age"/>
                        </FormGroup>
                        <FormGroup>
                            <label>Education</label>
                            <Input type="text" onChange={(e)=>this.setState({pendidikan:e.target.value})} placeholder="insert education"/>
                        </FormGroup>
                        <FormGroup>
                            <label>Address</label>
                            <Input type="text" onChange={(e)=>this.setState({alamat:e.target.value})} placeholder="insert address"/>
                        </FormGroup>
                        <Button type="submit" color="success" size="md" disabled={this._checkForm}>Add</Button>
                    </Form>
                    <ToastContainer/>
                </Col>
            </div>
        )
    }
}

export default withRouter(Add);
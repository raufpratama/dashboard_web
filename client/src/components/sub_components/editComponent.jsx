import React, { Component } from 'react';
import { Col, Table, Button, Input } from 'reactstrap';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:props.match.params.id,
            data:{},
        }
    }

    componentWillMount = () => {
        axios.get(`/edit/${this.state.url}`)
            .then(response=>this.setState({data:response.data[0]}))
            .catch(err=>console.log(`terjadi kesalahan ${err}`))
    }

    render() {
        const isi = this.state.data;
        return(
            <div>
                <h2>
                    Edit Data
                </h2>
                <Col lg="6" md="6" sm="12">
                    <label>ID</label>
                    <Input type="name" defaultValue={isi._id} disabled/>
                    <label>Nama</label>
                    <Input type="name" defaultValue={isi.nama}/>
                    <label>Umur</label>
                    <Input type="name" defaultValue={isi.umur}/>
                    <label>Pendidikan</label>
                    <Input type="name" defaultValue={isi.pendidikan}/>
                    <label>Alamat</label>
                    <Input type="name" defaultValue={isi.alamat}/>
                    <br/>
                    <Button color="success" size="md">Edit</Button>
                </Col>
            </div>
        )
    }
}

export default Edit;
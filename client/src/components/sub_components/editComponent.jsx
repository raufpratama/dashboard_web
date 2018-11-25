import React, { Component } from 'react';
import { Col, Table, Button, Input, Form, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:props.match.params.id,
            data:{},
            form:true,
            nama:'',
            umur:'',
            pendidikan:'',
            alamat:'',
        }
    }

    componentWillMount = () => {
        axios.get(`/edit/${this.state.url}`)
            .then(response=>this.setState({
                data:response.data[0],
                nama:response.data[0].nama,
                umur:response.data[0].umur,
                pendidikan:response.data[0].pendidikan,
                alamat:response.data[0].alamat,
            }))
            .catch(err=>console.log(`terjadi kesalahan ${err}`))
    }

    _onSubmit = (e) => {
        e.preventDefault();
        if(this.state.nama.length > 0 && this.state.umur.length > 0 
            && this.state.pendidikan.length > 0 && this.state.alamat.length > 0) {
            axios.post(`/edit/${this.state.url}`,{
                nama:this.state.nama,
                umur:this.state.umur,
                alamat:this.state.alamat,
                pendidikan:this.state.pendidikan
            })
            .then(response=> {
                console.log(`berhasil memasukkan data ${response}`)
                
            })
            .catch(err=>console.log(`terjadi kesalahan ${err}`))
        } else {
            this.setState({form:!this.state.form});
        }
        this.props.history.push('/');
    }

    _onNamaChange = (e) => this.setState({nama:e.target.value})
    _onUmurChange = (e) => this.setState({umur:e.target.value})
    _onPendidikanChange = (e) => this.setState({pendidikan:e.target.value})
    _onAlamatChange = (e) => this.setState({alamat:e.target.value})

    render() {
        const isi = this.state.data;
        return(
            <div>
                <h2>
                    Edit Data
                </h2>
                <Col lg="6" md="6" sm="12">
                    <Form onSubmit={this._onSubmit}>
                        <label>ID</label>
                        <Input type="name" defaultValue={isi._id} disabled/>
                        <label>Nama</label>
                        <Input type="name" onChange={this._onNamaChange} defaultValue={isi.nama}/>
                        <label>Umur</label>
                        <Input type="name" onChange={this._onUmurChange} defaultValue={isi.umur}/>
                        <label>Pendidikan</label>
                        <Input type="name" onChange={this._onPendidikanChange} defaultValue={isi.pendidikan}/>
                        <label>Alamat</label>
                        <Input type="name" onChange={this._onAlamatChange} defaultValue={isi.alamat}/>
                        {this.state.form ? <br/> : <Alert color="danger">Form tidak boleh kosong</Alert>}
                        <button className="btn btn-success" type="submit">Edit</button>
                    </Form>
                </Col>
            </div>
        )
    }
}

export default withRouter(Edit);
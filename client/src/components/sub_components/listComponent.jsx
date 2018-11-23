import React, { Component } from 'react';
import { Col, Table, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

class List extends Component {
    state = {
        data:[],
        modalVisible:false,
    }

    componentDidMount = () => {
        axios.get('/get_data')
            .then(response =>this.setState({data:response.data}))
            .catch(err=>console.log(`terjadi error ${err}`));
    }

    _deleteData = () => {
        axios.post('/detele_data')
    }

    _openModal = () => this.setState({modalVisible:!this.state.modalVisible})

    render() {
        const {data} = this.state;
        return (
            <div id="list">
                <h2>Data User</h2>
                <Col sm="12" md="7" lg="9">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Umur</th>
                                <th>Pendidikan</th>
                                <th>Alamat</th>
                                <th>Opsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((datas,id)=>(
                                <tr>
                                    <td>{datas.nama}</td>
                                    <td>{datas.umur}</td>
                                    <td>{datas.pendidikan}</td>
                                    <td>{datas.alamat}</td>
                                    <td><Link to={`/edit/${datas._id}`}><button className="btn btn-success btn-sm"><FaEdit/></button></Link>{' '}
                                        <button onClick={this._openModal} className="btn btn-danger btn-sm"><FaTrash/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button color="info" size="md">Add</Button>
                    <Modal isOpen={this.state.modalVisible} toggle={this._openModal}>
                        <ModalHeader>
                            Attention
                        </ModalHeader>
                        <ModalBody>
                            Are you sure to delete this data ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" size="md">YES</Button>
                            <Button color="warning" onClick={this._openModal} size="md">NO</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </div>
        )
    }
}

export default List;
import React, { Component } from 'react';
import { Col, Table, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import '../../styles/listComponentStyle.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            modalVisible:false,
            _id:'',
            index:'',
        }
        this._openModal = this._openModal.bind(this);
        this.runn();
    }
    runn = () => {
        axios.get('/get_data')
            .then(response =>{
                this.setState({data:response.data})
            })
            .catch(err=>console.log(`terjadi error ${err}`));
            
    }

    _deleteData = () => {
        axios.post('/delete_user', {
            _id:this.state._id
        })
        .then(response=> {
            console.log(`berhasil menghapus data ${response}`)
            this.setState({modalVisible:!this.state.modalVisible})
            this.runn()
            toast.success("Berhasil menghapus data",{autoclose:3000,position:toast.POSITION.BOTTOM_LEFT});
        })
        .catch(err=> console.log(`terjadi kesalahan ${err}`))
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
                                <tr key={datas._id}>
                                    <td>{datas.nama}</td>
                                    <td>{datas.umur}</td>
                                    <td>{datas.pendidikan}</td>
                                    <td>{datas.alamat}</td>
                                    <td><Link to={`/edit/${datas._id}`}><button className="btn btn-success btn-sm"><FaEdit/></button></Link>{' '}
                                        <button onClick={()=> this.setState({modalVisible:!this.state.modalVisible,_id:datas._id,index:datas.id})} className="btn btn-danger btn-sm"><FaTrash/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Link to="/add_user"><Button color="info" size="md">Add</Button></Link>
                    <Modal isOpen={this.state.modalVisible}>
                        <ModalHeader>
                            Attention
                        </ModalHeader>
                        <ModalBody>
                            Are you sure to delete this data ?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this._deleteData} size="md">YES</Button>
                            <Button color="warning" onClick={()=>this.setState({modalVisible:!this.state.modalVisible})} size="md">NO</Button>
                        </ModalFooter>
                    </Modal>
                    <ToastContainer/>
                </Col>
            </div>
        )
    }
}

export default List;
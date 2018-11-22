import React, { Component } from 'react';
import { Col, Table } from 'reactstrap';
import { mahasiswa } from '../data/datamahasiswa';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../../styles/listComponentStyle.css';
import axios from 'axios';

class List extends Component {
    state = {
        data:[],
    }

    componentDidMount = () => {
        axios.get('/get_data')
            .then(response =>this.setState({data:response.data}))
            .catch(err=>console.log(`terjadi error ${err}`));
    }

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
                                    <td><Link to="/crot"><button className="btn btn-success btn-sm"><FaEdit/></button></Link>{' '}
                                        <Link to="/crot"><button className="btn btn-danger btn-sm"><FaTrash/></button></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </div>
        )
    }
}

export default List;
import React, { Component } from 'react';
import { Col, Table } from 'reactstrap';
import { mahasiswa } from '../data/datamahasiswa';
import '../../styles/listComponentStyle.css';

class List extends Component {
    render() {
        return (
            <div id="list">
                <h2>Data User</h2>
                <Col sm="12" md="6" lg="6">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Umur</th>
                                <th>Pendidikan</th>
                                <th>Alamat</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mahasiswa.map((mahasiswas,id)=>(
                                <tr>
                                    <td>{mahasiswas.nama}</td>
                                    <td>{mahasiswas.umur}</td>
                                    <td>{mahasiswas.pendidikan}</td>
                                    <td>{mahasiswas.alamat}</td>
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
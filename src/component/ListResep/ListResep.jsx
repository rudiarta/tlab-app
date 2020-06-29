import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from "axios"
import { Link } from 'react-router-dom'


export class ListResep extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            listReseps: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8080/resep/list')
          .then(res => {
            const listReseps = res.data.data;
            this.setState({ listReseps });
          })
    }
    
    render() {
        return (
            <div>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Resep Name</th>
                    <th>Kategori</th>
                    <th>Bahan</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.listReseps.map((data,i) => <tr key={i}><td>{data.id}</td><td>{data.name}</td><td>{data.kategori_name}</td><td>{data.bahan}</td><td>
                            <Link to={{
                                    pathname: "/edit-resep",
                                    state:{
                                        id: data.id
                                    }
                                }}>Edit</Link></td></tr>)
                    }
                </tbody>
                </Table>
            </div>
        )
    }
}

export default ListResep

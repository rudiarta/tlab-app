import React, { Component } from "react"
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import axios from 'axios';


class FormResep extends Component {
    constructor(props){
        super(props)

        this.state = {
            listKategori: [],
            name: '',
            kategori: '',
            bahan: '',
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHanlder = (e) => {
        e.preventDefault()
        var reset = {
            listKategori: [],
            name: '',
            kategori: '',
            bahan: '',
        };

        var bodyFormData = new FormData()
        bodyFormData.set('kategori', this.state.kategori);
        bodyFormData.set('name', this.state.name);
        bodyFormData.set('description', this.state.bahan);
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8080/resep/add',
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        this.setState(reset)
        this.componentDidMount()
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8080/kategori/list')
          .then(res => {
            const listKategori = res.data.data;
            this.setState({ listKategori });
          })
    }
      

    render(){
        const {name, kategori, bahan} = this.state
        return (
            <div className="FormResep">
                <h1>Form Insert Resep</h1>
                <Container>
                <Row>
                    <Col>
                    <Form onSubmit={this.submitHanlder} >
                    <Form.Group>
                        <Form.Label>Nama Resep</Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Kategori</Form.Label>
                        <Form.Control name="kategori" onChange={this.changeHandler} value={kategori} as="select">
                        <option>Pilih Kategori</option>
                        {
                            this.state.listKategori.map((data,i) => <option value={data.Name} key={i} >{data.Name}</option>)
                        }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Bahan</Form.Label>
                        <Form.Control name="bahan" onChange={this.changeHandler} value={bahan} as="textarea" rows="3" />
                    </Form.Group>
                    <Button type="submit" variant="primary">SUBMIT</Button>
                    </Form>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default FormResep
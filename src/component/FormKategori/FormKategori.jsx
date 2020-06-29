import React, { Component } from "react"
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import axios from 'axios';


class FormKategori extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
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
        bodyFormData.set('name', this.state.name);
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8080/kategori/add',
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
    }
      

    render(){
        const {name} = this.state
        return (
            <div className="FormResep">
                <h1>Form Insert Kategori</h1>
                <Container>
                <Row>
                    <Col>
                    <Form onSubmit={this.submitHanlder} >
                    <Form.Group>
                        <Form.Label>Nama Kategori</Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={this.changeHandler} />
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

export default FormKategori
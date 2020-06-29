import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormResep from "../../component/FormResep/FormResep"
import FormKategori from "../../component/FormKategori/FormKategori"
import ListResep from "../../component/ListResep/ListResep"
import EditResep from '../../component/EditResep/EditResep'

class Form extends Component {

  routeInit(){
    if(window.location.pathname === "/insert-resep"){
      return <FormResep  />
    }
    if(window.location.pathname === "/insert-kategori"){
      return <FormKategori />
    }
    if(window.location.pathname === "/list-resep"){
      return <ListResep />
    }
    if(window.location.pathname === "/edit-resep"){
      return <EditResep userID={this.props.location.state.id} />
    }
  }

  render(){
    return (
      <div className="Form">
        <Link to="/"> Back to Home </Link>
        {this.routeInit()}
      </div>
    );
  }
}

export default Form;

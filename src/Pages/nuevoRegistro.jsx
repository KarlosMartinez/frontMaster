import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'



class nuevoregistro extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
  
        Nombre: "",
        Apellido: "",
        Edad:"",
        Lugar:"",
        Descripcion:""
      }
    }
  /*
    onInputChange = (e) => {
  
      const { id, value } = e.target;
      this.setState({
        [id]: value
      })
    }
    onSumitForm = (e) => {
      e.preventDefault();
      axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(usuario => alert('nuevo Registro'))
        .catch(err => alert(err))
    }
  */
    render() {
      return (
      
        <div className="App">
  
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Nombre</label>
              <input type="email" className="form-control" id="Nombre" aria-describedby="emailHelp" onChange={this.onInputChange}
                value={this.state.Nombre} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Apellido</label>
              <input type="email" className="form-control" id="Apellido" aria-describedby="emailHelp" onChange={this.onInputChange}
                value={this.state.Apellido} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Edad</label>
              <input type="email" className="form-control" id="Edad" aria-describedby="emailHelp" onChange={this.onInputChange}
                value={this.state.Edad} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Lugar</label>
              <input type="email" className="form-control" id="Lugar" aria-describedby="emailHelp" onChange={this.onInputChange}
                value={this.state.Lugar} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Descripción</label>
              <input type="password" className="form-control" id="password" onChange={this.onInputChange} value={this.state.Descripcion} />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
  
        </div>
          
      )
    }
  }
  export default nuevoregistro;
  
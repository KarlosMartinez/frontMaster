import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
import 'popper.js';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
//import {Link} from 'react-router-dom'
//import {Map, GoogleApiWrapper} from 'google-maps-react';

//components
import Home from './Pages/Home'
import Navbar from './components/Navbar'
//import Card  from './components/Cards'
import Carr from './components/carr'
import Personas from './components/Personas'
//import Mapas from './components/Mapas'
import  SimpleMap from './components/Mapas'
import nuevoregistro from './Pages/nuevoRegistro'




class App extends Component {
  contructor (){
    //super()
    this.state = {
      message: 'Se Busca'
    }
  }
  render (){
  return (
    <div className="App">
      <React.Fragment>
<BrowserRouter>
<Navbar/>
<Route path="/nuevoRegistro" Component={nuevoregistro}>
    <nuevoregistro/>
    
  </Route>
  <Route path="/Home">
    <Home/>
  </Route>
 
  
  
  </BrowserRouter>    
      
  </React.Fragment>
  
  
      <Carr/>
    

      <Personas/>
      
      
      <SimpleMap/>
      
      <nuevoregistro/>

      </div>
 )
  }
}

export default App;

import React, {Component, Fragment} from 'react';
import Card from './Cards';



class Personas extends Component {
    constructor(props){
super(props);


    this.state = {
        Personas: [
        {id:1, name: 'Michelle ', apellido: 'Del Rio', edad:'85 años', ubicacion: 'Santiago Queretaro', lat:'19.417715', lng:'-99.162264' , descripcion:"Vestia pantalon color azul, playera blanca y zapatos negros, lunar en la frente" },
        {id:2, name: 'Abraham', apellido: 'Pat', edad:'46 años', ubicacion: 'Campeche', lat:'20.611508', lng:'-100.306410', descripcion:"Vestia pantalon color azul, playera blanca y zapatos negros, lunar en la frente"  },
        {id:3, name: 'Josefa', apellido: 'Ortiz', edad:'66 años', ubicacion: 'Culiacan, Sinaloa', lat:'19.420584', lng:'-99.143731' , descripcion:"Vestia pantalon color azul, playera blanca y zapatos negros, lunar en la frente"},
        {id:4, name: 'Leonardo', apellido: 'Benitez', edad:'62 años', ubicacion: 'Coahuila de Zaragoza', lat:'25.879967', lng:'-97.504050',  descripcion:"Vestia pantalon color azul, playera blanca y zapatos negros, lunar en la frente" },
        {id:5, name: 'Alfonso',apellido: 'Perez', edad:'19 años', ubicacion: 'Baja California', lat:'16.795846', lng:'-93106388',   descripcion:"Vestia pantalon color azul, playera blanca y zapatos negros, lunar en la frente"},
        {id:6, name: 'Miguel Angel', apellido: 'Lopez', edad:'12 años', ubicacion: 'Cd. Victoria, Tamaulipas', lat:'23.278988', lng:'-106.448652', descripcion:"Vestia pantalon color azul, playera blanca y zapatos negros, lunar en la frente"  }
        ]
    }
    }
    render (){

        let {Personas} = this.state;
        console.log(Personas);
return( 
   
    <div>
       {this.state.Personas.map( Cards =>(
           <Card  key ={Personas.id} 
           Cards={Cards}/>
       ))}
        

    </div>
//  <h1>Lista de Personas Desaparecidas</h1>
 
);
    }

}

export default Personas;
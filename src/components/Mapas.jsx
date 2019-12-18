import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Personas from './Personas' 

import Marker from './Marker';
const Coordenadas = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 23.6345005,
      lng: -102.5527878
    },
    zoom: 5,
    desaparecidos : {Personas}
  };
 constructor(props){
     super(props);
 }
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCnRYqv5X7-37Qn98hzWW2YOyy3k9Z_Vts' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>

     

            <Marker 
            lat={19.420584  }
            lng={-99.143731}
            name="Dev.f
            
            CDMX"
            color="blue"
            />

            <Marker 
            lat={20.611508 }
            lng={-100.306410}
            name="Pedro del Rio
            Edad:85 años
            Santiago, Queretaro"
            color="red"
            />

           <Marker 
            lat={19.417715}
            lng={-99.162264}
            name="ImpactHub
            CDMX"
            color="red"
            />

            <Marker 
            lat={19.350235}
            lng={-90.720964}
            name="Abraham Pat Pat
            Edad:46 años
            Campeche, Campeche"
            color="yellow"
            />
             <Marker 
            lat={16.795846}
            lng={-93106388}
            name="Alejandro Sanchez
            Edad: 34 años"
            color="blue"
            />
              <Marker 
            lat={23.278988}
            lng={-106.448652}
            name="Nombre: Josefa Ortiz
            Edad: 66 años
            Culiacan Sinaloa"
            color="green"
            />
               <Marker 
            lat={27.319260}
            lng={-102.396964}
            name="Leonardo Benitez
            Edad:62 años
            Coahuila de Zaragoza"
            color="yellow"
            />
                <Marker 
            lat={31.102534}
            lng={-114.905599}
            name="Nombre: Alfonso Perez Montiel
            Edad: 19 años
            Baja California
            "
           
            color="red"
            />
                   <Marker 
            lat={23.751990}
            lng={-99.155347}
            name="Nombre: Miguel lopez reyes
            Edad: 12 años
            Cd. Victoria Tamaulipas
            "
            color="green"
            />

            <Marker 
            lat={31.714038}
            lng={-106.457220}
            name="Nombre: Alma reyes juarez
            Edad: 21 años
            Ciudad Juarez Chihiahua
            "
            color="red"
            />
             <Marker 
            lat={28.572010}
            lng={-106.147716}
            name="Nombre: Maria juarez
            Edad: 29años
            Chihuahua, Chihuahua
            "
            color="green"
            />
               <Marker 
            lat={26.205862}
            lng={-107.918158}
            name="Nombre: Maria Elena Ortiz
            Edad: 39años
            Los Mochis Sinaloa
            "
            color="yellow"
            />

<Marker 
            lat={30.197387}
            lng={-108.875166}
            name="Nombre:  Elena orta
            Edad: 30años
            Sonora 
            "
            color="red"
            />







        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;

/*
import React, {Component, Fragment} from 'react';

import {Map, GoogleApiWrapper} from 'react-google-maps'





class Mapas extends Component {

   
    render () {


        
return( 

    <Map google={this.PaymentResponse.google}
    zoom={8}
  //  style={mapStyles}
    initialCenter={{lat: 23.6345005, lng: -102.5527878}}
    />
    
);
    }
}

export default GoogleApiWrapper ({
    apikey: 'AIzaSyCnRYqv5X7-37Qn98hzWW2YOyy3k9Z_Vts'

}) (Mapas)
//export default Mapas;

*/
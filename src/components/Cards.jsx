import React, {Component} from 'react';




const Cards = ({Cards}) =>{

return (
    <div className="card-group d-flex juatufy-content-around ">
  <div className="card d-flex p-2 text-white   mb-4 mx-4">
    <img src="https://i.imgur.com/xEwOkno.jpg" className="card-img-top" alt="..."/>
    <div className="card-body bg-danger">
      <h5 className="card-title">Nombre: {Cards.name} {Cards.apellido}</h5>
      <p className="card-text " >Edad: {Cards.edad}</p>
      <p className="card-text " >Ubicación: {Cards.ubicacion}</p>
      <p className="card-text text-white">Descripción: {Cards.descripcion}</p>
    </div>
  </div>
  <div className="card d-flex p-2 text-white   mb-4 mx-4">
    <img src="https://i.imgur.com/F7DYEhk.jpg" className="card-img-top" alt="..."/>
    <div className="card-body bg-warning">
      <h5 className="card-title">Nombre: {Cards.name} {Cards.apellido}</h5>
      
      <p className="card-text">Edad: {Cards.edad}</p>
      <p className="card-text">Ubicacion {Cards.ubicacion}</p>
      <p className="card-text">Descripción: {Cards.descripcion}</p>
    </div>
  </div>
  <div className="card d-flex p-2 text-white   mb-4 mx-4">
    <img src="https://i.imgur.com/Y5XIolT.jpg" className="card-img-top" alt="..."/>
    <div className="card-body bg-success">
      <h5 className="card-title">Nombre: {Cards.name} {Cards.apellido}</h5>
      <p className="card-text">Edad: {Cards.edad}</p>
      <p className="card-text">Ubicación: {Cards.ubicacion}</p>
<p className="card-text">Descripción:{Cards.descripcion}</p>
    </div>
  </div>
</div>
   





);
}
export default Cards;
/*
<div className="card-group">
       
<div className="card width=25%  d-flex justify-content-space-around" style={{ height: '50vh', width: '50%' }} >
  <img src="https://i.imgur.com/Y5XIolT.jpg " className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Nombre: {Cards.name} {Cards.apellido}</h5>
    <p className="card-text">Edad: {Cards.edad}</p>
    <p className="card-text">Ubicacion {Cards.ubicacion}</p>
    <a href="#" className="btn btn-primary">Información</a>
  </div>
</div>
   </div> 
   */
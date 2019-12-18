import React from 'react';
//import b1 from './src/assets/img/SB1.jpg';
import './Carru.css';

function Carr (props){
    console.log(props)
    return(
        <div>
             
  
             

<div id="carouselExampleControls" className="carousel slide  align-item-center" data-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://i.imgur.com/iLlL6IP.jpg' className=" imgCarr d-block w-100 object-fit:cover" alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.imgur.com/pEQGUxW.jpg"  className=" imgCarr d-block w-100 object-fit:cover" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.imgur.com/7xW5Hp3.jpg" className=" imgCarr <d-block w-100 object-fit:cover " alt="img3"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
  </div>
    
    ) 
}

export default Carr;



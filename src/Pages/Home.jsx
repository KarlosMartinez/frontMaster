import React, {Component} from 'react';
import {Link} from 'react-router-dom'
function Home (props){

    console.log(props);

    return (
        
        <div>
     

        
<h1 style={{ height: '10vh', width: '100%' }}>{props.titulo}</h1>
        </div>
    );
}

export default Home;
import React from 'react';
import '../css/style.css'
function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
        <img className='img-testimonio' 
        src={require(`../img/${props.src}.png`)}
        alt='img-testimonio'/>
        <div className='texto-testimonio'>
          <p className='nbre'>
            <strong>{props.nbre}</strong>
          </p>
          <p className='titulo'>
            <strong>{props.titulo}</strong>
          </p>
          <p className='txt'>"<b>Lorem</b> ipsum dolor, sit amet consectetur adipisicing elit. Atque minus, sit beatae quo incidunt illum qui nemo necessitatibus recusandae officiis quaerat doloribus tempore consectetur placeat id deleniti fugit <b>voluptas iste?</b>"</p>

        </div>
    </div>
  );
};

export default Testimonio;
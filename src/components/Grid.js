import React from 'react';
import 'C:/Users/luise/proyectomodulo1/src/Grid.css';
import imagen1 from '../assets/img/bafle.jpg';
import imagen2 from '../assets/img/larga.jpg';
import imagen3 from '../assets/img/ancha (1).jpg';
import imagen4 from '../assets/img/ancha (2).jpg';
import imagen5 from '../assets/img/Airpods.jpg';

const Grid = () => {
  return (
    <div className="grid">
      <div className="cell cell-1-4">
        <div className='image-container1'>
          <img src={imagen2} alt="Descripción de la imagen"/>
          <div className="overlay1">
            <div className="text11">Sale up to 30% Off</div>
            <div className="text21">Lstest Sound System</div>
            <a href='/' className="link1">VIEW OFFRE</a>
          </div>
        </div>
      </div>  
      <div className="cell">
      <div className='image-container'>
          <img src={imagen3} alt="Descripción de la imagen"/>
          <div className="overlay">
            <div className="text1">20% Off</div>
            <div className="text2">Smart Watch</div>
            <a href='/' className="link">SHOP WOW</a>
          </div>
        </div>
      </div>
      <div className="cell">
      <div className='image-container'>
          <img src={imagen1} alt="Descripción de la imagen"/>
          <div className="overlay">
            <div className="text1">Tablet Computer </div>
          </div>
        </div>
      </div>
      <div className="cell">
      <div className='image-container'>
          <img src={imagen4} alt="Descripción de la imagen"/>
          <div className="overlay">
            <div className="text1">Smart Speaker</div>
          </div>
        </div>
      </div>
      <div className="cell">
      <div className='image-container'>
          <img src={imagen5} alt="Descripción de la imagen"/>
          <div className="overlay">
            <div className="text1">Game</div>
            <div className="text2">Controller</div>
            <a href='/' className="link">VIEW MORE</a>
          </div>
        </div>
      </div>
      
  </div>
);
};
export default Grid;








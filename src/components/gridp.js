import React from 'react';
import 'C:/Users/luise/proyectomodulo1/src/global.css';
import 'C:/Users/luise/proyectomodulo1/src/gridp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import imagen1 from '../assets/img/sinfondo.png'; 
import imagen2 from '../assets/img/reloj.png'; 

function gridp() {

    const products = [
        
        {
          id: 1,
          image: imagen1,
          rating: 4, // Puntuación de 1 a 5 estrellas
          description1: 'Descripcion',
          description: 'Producto 1',
          price: '$100.00',
        },
        {
          id: 2,
          image: imagen2,
          rating: 3,
          description1: 'Descripcion',
          description: 'Producto 2',
          price: '$150.00',
        },
        {
            id: 3,
            image: imagen1,
            rating: 1, // Puntuación de 1 a 5 estrellas
            description1: 'Descripcion',
            description: 'Producto 3',
            price: '$100.00',
          },
          {
            id: 4,
            image: imagen2,
            rating: 5,
            description1: 'Descripcion',
            description: 'Producto 4',
            price: '$150.00',
          },
          {
            id: 5,
            image: imagen1,
            rating: 4, // Puntuación de 1 a 5 estrellas
            description1: 'Descripcion',
            description: 'Producto 5',
            price: '$100.00',
          },
          {
            id: 6,
            image: imagen2,
            rating: 1,
            description1: 'Descripcion',
            description: 'Producto 6',
            price: '$150.00',
          },
          {
            id: 7,
            image: imagen1,
            rating: 2, // Puntuación de 1 a 5 estrellas
            description1: 'Descripcion',
            description: 'Producto 7',
            price: '$100.00',
          },
          {
            id: 8,
            image: imagen2,
            rating: 5,
            description1: 'Descripcion',
            description: 'Producto 8',
            price: '$150.00',
          },
          {
            id: 9,
            image: imagen1,
            rating: 3, // Puntuación de 1 a 5 estrellas
            description1: 'Descripcion',
            description: 'Producto 9',
            price: '$100.00',
          },
          {
            id: 10,
            image: imagen2,
            rating: 1,
            description1: 'Descripcion',
            description: 'Producto 10',
            price: '$150.00',
          },
        
      ];
  return (
    <div className="grid-container">
    <div className="title-container">
        <h2 className="grid-title">Top Products</h2>
        <div className="h3-container">
          <h3 className="grid-h3">Latest</h3>
          <h3 className="grid-h3">Bese seller</h3>
          <h3 className="grid-h3">Featured</h3>
        </div>
      </div>
      
      {products.map((product) => (
        <div key={product.id} className="grid-item">
          <div className="grid-image">
            <img src={product.image} alt="Imagen" />
          </div>
          <div className="grid-rating">
          {Array.from({ length: product.rating }, (v, i) => (
          <FontAwesomeIcon key={i} icon={faStar} color="gold" />
          ))}
          </div>
          <div className="grid-description">
            {product.description1}
          </div>
          <div className="grid-description">
            {product.description}
          </div>
          <div className="grid-price">
            {product.price}
          </div>
        </div>
      ))}
    </div>
  );
}

export default gridp;





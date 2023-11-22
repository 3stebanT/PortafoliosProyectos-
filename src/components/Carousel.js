import React from 'react';
import 'C:/Users/luise/proyectomodulo1/src/global.css';
import { Carousel } from 'react-responsive-carousel'; //componente de carrusel y sus estilos.
import 'react-responsive-carousel/lib/styles/carousel.min.css'; //los estilos del carrusel.
import 'C:/Users/luise/proyectomodulo1/src/MyCarousel.css'; 
import imagen1 from '../assets/img/carru1.jpg';
import imagen2 from '../assets/img/carru2.jpg';
import imagen3 from '../assets/img/carru3.jpg';
import { useState, useEffect } from 'react';




function MyCarousel() {

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambia automáticamente a la siguiente diapositiva
      setSlide((prevSlide) => (prevSlide + 1) % 3); // 3 es el número total de diapositivas
    }, 2500); // Cambia de diapositiva cada cierto segundos 
    
    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

    

  return (
    
    <Carousel
      showArrows={true} // Muestra las flechas de navegación.
      showThumbs={false} // No muestra miniaturas de las imágenes.
      showStatus={false} // Desactiva la numeración de las imágenes
      selectedItem={slide} // Establece la diapositiva activa según el estado
    >
      
      <div className="carousel-item">
      <img src={imagen2} alt="Imagen 2" /> 
        <div className="carousel-content">
            <h2>Special Discount</h2>
            <h1 className="thin-font">Latest Audio System</h1> {/*le creo una clase para cambiarle la letra */}
            <h1>offer 20% off</h1>
            <button className="color-change-button">Ver más</button>
        </div>
      </div>

      <div className="carousel-item">
      <img className="blur-image" src={imagen3} alt="Imagen 1" /> {/*le creo una clase para opacarla un poco */} 
        <div className="carousel-content">
        <h2>Special Discount</h2>
        <h1 className="thin-font">Latest Audio System</h1> {/*le creo una clase para cambiarle la letra */}
          <h1>offer 20% off</h1>
          <button className="color-change-button">Ver más</button>
        </div>
      </div>
      
      <div className="carousel-item">
        <img src={imagen1} alt="Imagen 1" />
        <div className="carousel-content">
        <h2>Special Discount</h2>
        <h1 className="thin-font">Latest Audio System</h1> {/*le creo una clase para cambiarle la letra */}
          <h1>offer 20% off</h1>
          <button className="color-change-button">Ver más</button>
        </div>
      </div>
    </Carousel>
    
  );
}

export default MyCarousel;




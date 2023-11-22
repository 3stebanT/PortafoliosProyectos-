import React from 'react';
import 'C:/Users/luise/proyectomodulo1/src/Servicios.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
    return (
         <div className="grir-container">
      {Array.from({ length: 3 }, (_, index) => (
        // Generamos 3 celdas
        <div className="cel" key={index}>
          <div className="content">
            <div className="icons">
              <a href="/"> {/* Reemplaza "URL" con tu URL deseada */}
                <i className="fa fa-truck"></i> {/* Icono de Font Awesome */}
              </a>
            </div>
            <div className="text">
              <div className="title">FREE SHIPPING WORLDWIDE{index + 1}</div>
              <div className="description">Lorem ipsum is simply dummy Text{index + 1}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
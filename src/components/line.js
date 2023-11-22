import React from 'react';
import 'C:/Users/luise/proyectomodulo1/src/line.css';

function line() {
  
    return (
      <header className="line-header">
        <nav className="tec-right">
        <a href="/feature">Aca va un contenido largo $1022</a>
        <div className="separator1"></div> {/* Línea vertical de separación */}
        <a href="/feature">Next</a>
        </nav>
        <nav className="tec-right">
          <a href="/feature">El dia de hoy</a>
          <div className="separator1"></div> {/* Línea vertical de separación */}
          <a href="/search">Certificaciones del sitio</a>
        </nav>
      </header>
    );
  }
  
  export default line;

import React, { useState } from 'react';
import 'C:/Users/luise/proyectomodulo1/src/global.css';
import Logo1 from '../assets/img/logo.jpg';
import 'C:/Users/luise/proyectomodulo1/src/App.css';
import 'font-awesome/css/font-awesome.min.css';



function Header() {
// Función que se ejecutará cuando se haga clic en el icono
const handleIconClick = () => {
  // Agrega aquí el código que deseas ejecutar cuando se hace clic en el icono
  console.log('Se hizo clic en el icono');
};
  return (
    <header className="app-header">
      <div className="logo">
        <img src={Logo1} alt="Logo" style={{ maxWidth: '150px', maxHeight: '50px' }} />
      </div>
      <nav className="nav-right">
        <div className="menu-toggle" onClick={handleIconClick}>
          <i className="fa fa-bars"></i>
        </div>
        <div className="menu-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/blog">Blog</a>
          <a href="/media">Media</a>
          <a href="/shortcode">Shortcode</a>
          <a href="/feature">Features</a>
        </div>
        <div className="separator"></div>
        <div className="menu-icons">
          <a href="/search"><i className="fa fa-search"></i></a>
          <a href="/login"><i className="fa fa-user"></i></a>
          <a href="/cart"><i className="fa fa-shopping-cart"></i></a>
        </div>
      </nav>
    </header>
  );
}
export default Header;

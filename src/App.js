import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Gridp from './components/gridp';
import Grid from './components/Grid';
import Servicios from './components/Servicios';
import Line from './components/line';

function App() {
  return (
    <div className="App">
      <Line/>
      <Header /> {/* Renderiza el componente Header en la página. */}
      <Carousel /> {/* Renderiza el componente Carousel en la página. */}
      <Servicios/>
      <Grid/>
      <Gridp/>
    </div>
  );
}

export default App;
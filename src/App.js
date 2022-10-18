import React from 'react';
import { AppPizzaContextProvider} from './Context/AppPizzaContext';
import { CarritoContextProvider } from './Context/CarritoContext'
import { Route, Routes, BrowserRouter } from 'react-router-dom';


import Home from './Views/Home';
import Detalles from './Views/Detalles';
import Carrito from './Views/Carrito';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';



const App = () => {
  return (
    <div>
      <AppPizzaContextProvider>
        <CarritoContextProvider >
          <BrowserRouter>
            <Navbar />
            <Banner/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Detalles />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </BrowserRouter>
        </CarritoContextProvider>
      </AppPizzaContextProvider>
    </div>
  );
}

export default App;

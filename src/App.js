import './App.css';
import React, { Fragment } from "react";
import LugarEvento from "./components/LugarEvento/LugarEvento.component";
import TipoEvento from "./components/TipoEvento/TipoEvento.component";
import GastosEvento from "./components/GastosEvento/GastosEvento.component";
import UbicacionEvento from "./components/UbicacionEvento/UbicacionEvento.component";
import FechaEvento from "./components/FechaEvento/FechaEvento.component";
import HorasEvento from "./components/HorasEvento/HorasEvento.component";
import PersonasEvento from "./components/PersonasEvento/PersonasEvento.component";

function App() {
  return (
    <Fragment>
      <LugarEvento />
      <TipoEvento />
      <GastosEvento />
      <UbicacionEvento />
      <FechaEvento />
      <HorasEvento />
      <PersonasEvento />
    </Fragment>
  );
}

export default App;

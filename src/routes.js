import React from 'react';
import { Switch, Route } from 'react-router-dom';

// * Paginas do React
import Home from './pages/Home';
import Reservas from './Reservas';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reservas" component={Reservas} />
    </Switch>
  )
}
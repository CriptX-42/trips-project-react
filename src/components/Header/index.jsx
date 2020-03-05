import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg'
import './style.css';


export default function Header() {

  return(
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo"></img>
      </Link>

      <Link className="reserva" to="/reservas">
        <strong>Minhas Reservas</strong>
        <strong>0 reservas</strong>
      </Link>
    </header>
  )

}
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // * ele conecta o redux com os reducers

import logo from '../../assets/logo/logo.svg'
import './style.css';


export default function Header() {

  const reserveSize = useSelector(state => state.reserva.length);

  return(
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo"></img>
      </Link>

      <Link className="reserva" to="/reservas">
        <strong>Minhas Reservas</strong>
        <span>{reserveSize} reservas</span>
      </Link>
    </header>
  )

}
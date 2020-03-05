import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { MdDelete } from 'react-icons/md';

import "./style.css";


export default function Reservas() {
  const dispatch = useDispatch();
  const reservas = useSelector(state => state.reserva);

  function handleRemove(id) {
    dispatch({
      type: 'REMOVER_RESERVA',
      id,
    });
  }

  return (
    <>
      <h1 className="title">Você solicitou {reservas.length} reserva</h1>

      {reservas.map(reserva => (
        <div className="reservas" key={reserva.id}>
          <img src={reserva.image} alt={reserva.title}></img>
          <strong>{reserva.title}</strong>
          <span>Quantidade: {reserva.amount}</span>
          <button type="button" onClick={() => handleRemove(reserva.id)}>
            <MdDelete size={20} color="#443737" />
          </button>
        </div>
      ))}
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </>
  );
}

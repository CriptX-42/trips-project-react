import React from "react";

import { MdDelete } from "react-icons/md";

import "./style.css";
import { useSelector } from "react-redux";

export default function Reservas() {
  const reservas = useSelector(state => state.reserva);

  return (
    <>
      <h1 className="title">Você solicitou {reservas.length} reserva</h1>

      {reservas.map(res => (
        <div className="reservas" key={res.id}>
          <img src={res.image} alt={res.title}></img>
          <strong>{res.title}</strong>
          <span>Quantidade: 2</span>
          <button type="button" onClick={() => {}}>
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

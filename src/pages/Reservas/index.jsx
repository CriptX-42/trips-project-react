import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";

import { removeReserve, updateAmountReserve } from "../../store/modules/reserva/actions";
import "./style.css";

export default function Reservas() {
  const dispatch = useDispatch();
  const reservas = useSelector(state => state.reserva);

  function handleRemove(id) {
    dispatch(removeReserve(id));
  }

  function decrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount - 1));
  }

  function incrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount + 1));
  }

  return (
    <>
      <h1 className="title">Você solicitou {reservas.length} reserva</h1>

      {reservas.map(reserva => (
        <div className="reservas" key={reserva.id}>
          <img src={reserva.image} alt={reserva.title}></img>
          <strong>{reserva.title}</strong>
          <div id="amount">
            <button type="button" onClick={() => decrementAmount(reserva)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
            <input type="input" readOnly value={reserva.amount}/>
            <button type="button" onClick={() => incrementAmount(reserva)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
          </div>
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

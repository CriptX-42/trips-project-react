export function adicionarReserva(trip){
  return {
    type: 'ADICIONAR_RESERVA',
    trip
  }
}
export function removerReserva(id){
  return {
    type: 'REMOVER_RESERVA',
    id,
  }
}
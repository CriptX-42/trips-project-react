export default function reserve( state = [], action ) {
  
  switch(action.type){
    case 'ADD_RESERVA':
      return[ ...state, action.trip ];
    default:
      return state;
  }
}

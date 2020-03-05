import { combineReducers } from 'redux';

import reserva from './reserva/reducer'

/* 
 * Aqui nós combinamos todos os reducers para que possamos passar ao index.js do store (pode ser facilitado com duck pattern)
*/

export default combineReducers({
  reserva,
})
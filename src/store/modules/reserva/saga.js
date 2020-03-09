import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { updateAmountReserve, addReserveSuccess } from './actions';
import api from '../../../services/api';

function* addToReserve ({id}) {
    const tripExist = yield select(state => state.reserva.find(trip => trip.data.id === id))
    if(tripExist) {
        const amount = tripExist.amount + 1;
        yield put (updateAmountReserve(id, amount))
    }
    else {
        const response = yield call(api.get, `trips/${id}`);
        const data = {
            ...response, amount: 1
        }
        yield put(addReserveSuccess(data))
    }
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
]);
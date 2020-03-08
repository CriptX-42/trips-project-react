import { all } from 'redux-saga/effects';
import reserva from './reserva/saga';

export default function* rootSaga() {
    return yield all({
        reserva,
    })
}
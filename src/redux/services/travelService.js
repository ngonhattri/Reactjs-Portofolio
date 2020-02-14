import { all, call, put, actionChannel, take } from 'redux-saga/effects';
import * as types from '../actions/index';
import data from '../../components/data/travel.json';
export function* travelDetailWatcher() {
    const subChannel = yield actionChannel(types.GET_TRAVEL);
    while (true) {
        const action = yield take(subChannel);
        yield call(fetchTravel, action);
    }
}

function* fetchTravel(action) {
    const { id } = action;
    try {
        const result = yield data.find(t => t.id === id);
        yield put({ type: types.SET_TRAVEL, payload: result });
    } catch (error) {
        console.log(error.response);
    }
}

export function* travelSaga() {
    yield all([

    ])
}
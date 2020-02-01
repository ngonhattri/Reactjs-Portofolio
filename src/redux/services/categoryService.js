import { all, call, put, actionChannel, take } from 'redux-saga/effects';
import RequestService from '../../config/requestService';
import * as types from '../actions/index';

function* fetchCategories() {
    try {
        const result = yield RequestService.get(`/api/v1/categories`);
        yield put({ type: types.SET_CATEGORIES, payload: result.data.data });
    } catch (error) {
        console.log(error.response);
    }
}

export function* categoriesWatcher() {
    const subChannel = yield actionChannel(types.GET_CATEGORIES);
    while (true) {
        const action = yield take(subChannel);
        yield call(fetchCategories, action);
    }
}

export function* categorySaga() {
    yield all([

    ])
}
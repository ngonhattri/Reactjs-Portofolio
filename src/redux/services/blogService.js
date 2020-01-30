import { all, call, put, actionChannel, take } from 'redux-saga/effects';
import RequestService from '../../config/requestService';
import * as types from '../actions/index';

function* fetchBlogs(action) {
    const { page } = action;
    try {
        const result = yield RequestService.get(`/api/v1/blogs?page=${page}`);
        yield put({ type: types.SET_BLOGS, payload: result.data });
    } catch (error) {
        console.log(error.response);
    }
}

export function* blogDetailWatcher() {
    const subChannel = yield actionChannel(types.GET_BLOG);
    while (true) {
        const action = yield take(subChannel);
        yield call(fetchBlog, action);
    }
}

function* fetchBlog(action) {
    const { id } = action;
    try {
        const result = yield RequestService.get(`/api/v1/blogs/detail/${id}`);
        yield put({ type: types.SET_BLOG, payload: result.data.data });
    } catch (error) {
        console.log(error.response);
    }
}

export function* blogWatcher() {
    const subChannel = yield actionChannel(types.GET_BLOGS);
    while (true) {
        const action = yield take(subChannel);
        yield call(fetchBlogs, action);
    }
}

export function* blogSaga() {
    yield all([

    ])
}
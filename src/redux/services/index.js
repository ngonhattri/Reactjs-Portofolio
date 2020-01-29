import { all } from 'redux-saga/effects';
import { blogWatcher, blogSaga, blogDetailWatcher } from './blogService';
export default function* rootSaga() {
    yield all([
        blogSaga(),
        blogWatcher(),
        blogDetailWatcher(),
    ]);
}
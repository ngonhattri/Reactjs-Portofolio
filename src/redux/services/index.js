import { all } from 'redux-saga/effects';
import { blogWatcher, blogSaga, blogDetailWatcher } from './blogService';
import { categoriesWatcher, categorySaga } from './categoryService';
export default function* rootSaga() {
    yield all([
        blogSaga(),
        blogWatcher(),
        blogDetailWatcher(),
        categorySaga(),
        categoriesWatcher()
    ]);
}
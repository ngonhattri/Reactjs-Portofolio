import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
    blogs: blogReducer,
    categories: categoryReducer
});
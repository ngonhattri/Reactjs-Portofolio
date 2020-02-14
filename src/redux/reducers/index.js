import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import categoryReducer from './categoryReducer';
import travelReducer from './travelReducer';

export default combineReducers({
    blogs: blogReducer,
    categories: categoryReducer,
    travels: travelReducer,
});
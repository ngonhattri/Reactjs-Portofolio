import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/index';
import rootSaga from './redux/services/index';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;
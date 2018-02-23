import {createStore, applyMiddleware} from 'redux';
import Reducer from '../Reducers/';
import Thunk from 'redux-thunk'
//let store = createStore(Reducer);

const store= createStore(Reducer,applyMiddleware(Thunk));

export default store;
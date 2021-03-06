/**
 * Created by Lanny on 2017/7/28.
 */
import{createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const MainReducer = require('../reducers');

const createStoreWithThunk = applyMiddleware(thunk)(createStore);
let store = createStoreWithThunk(MainReducer);

export default store;

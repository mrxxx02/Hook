import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './Features/Counter/reducer';

let rootReducers = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
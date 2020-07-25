import mainReducer from './main-reducer';

const { createStore, combineReducers } = require("redux")


let reducers = combineReducers({
    mainPage: mainReducer,
})

let store = createStore(reducers);
window.store = store;

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore,applyMiddleware } from 'redux'
import appReducer from './Reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));


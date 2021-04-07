import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {reducer} from "./reducer/reducer";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/App';
import {Operations} from "./reducer/reducer";

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));


store.dispatch(Operations.loadStories());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

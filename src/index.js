import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {combineReducers,applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import { allReducers } from './reducers';



import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(allReducers,{},applyMiddleware(reduxThunk));
const app = (
    <Provider store={store}>
        
        <BrowserRouter>
            <App />
        </BrowserRouter>
        
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

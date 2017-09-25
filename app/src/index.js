import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './styles/main.css';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
        <App />
        </Provider>
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();

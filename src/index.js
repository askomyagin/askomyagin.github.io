import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import HeadphonesStoreService from './services/headphones-store';
import {HeadphonesServiceProvider} from './components/headphones-service-context';
import store from './store';

const headphonesService = new HeadphonesStoreService();

ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundry>
            <HeadphonesServiceProvider value= {headphonesService}>
                <Router>
                    <App />
                </Router>
            </HeadphonesServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
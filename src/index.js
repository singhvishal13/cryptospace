import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

//import created app
import App from './App';
import store from './app/store'
import 'antd/dist/antd.css'

//passing the app as parameter to root div
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, 
    document.getElementById('root')
);

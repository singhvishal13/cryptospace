import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import created app
import App from './App';

//passing app as parameter to root div
ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);

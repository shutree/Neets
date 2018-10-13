import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'swiper/dist/css/swiper.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    HashRouter as Router
} from 'react-router-dom'

import Title from './components/commons/title'

import Test from './test'


// ReactDOM.render(
//     <Test></Test>,
//     document.getElementById('root'));
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

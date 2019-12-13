import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';

import './css/base.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';

import App from './components/App';
import './index.scss';

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
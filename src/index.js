import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Components/MainPage';
import * as serviceWorker from './serviceWorker';
import  'react-bootstrap';
ReactDOM.render(<MainPage />, document.getElementById('root'));
serviceWorker.unregister();

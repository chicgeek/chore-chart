import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './js/App';
import * as serviceWorker from './js/serviceWorker';
import { data } from './js/data/mock';

ReactDOM.render(<App data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

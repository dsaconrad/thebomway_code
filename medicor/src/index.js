
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'semantic-ui-css/semantic.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import rootReducers from "./Reducers/rootReducers";

const store = createStore(rootReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
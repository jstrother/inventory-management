// imported into index.jsx

import {createStore} from 'redux';
import reducer from './reducers.js';

export default createStore(reducer);
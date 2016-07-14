import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

const store = require('./flow/store.js');
const Rack = require('./components/rack.jsx');
 
const routes = (
	<Router history={hashHistory}>
		<Route path='/inventory/:rackId' component={Rack} />
	</Router>
);

document.addEventListener('DOMContentLoaded', function() {
	ReactDom.render(
		<Provider store={store}>
			{routes}
		</Provider>,
		document.getElementById('app')
	);
});
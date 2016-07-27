import React from 'react';
import render from 'react-dom';
import store from './flow/store.js';
import Provider from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Rack from './components/rack.jsx';
import Inventory from './components/inventory.jsx';
 
const Container = (props) => (
	<div>
		<h1>Inventory</h1>
		{props.children}
	</div>
);

const MyRouter = () => (
	<Router history={hashHistory}>
		<Route path='/inventory-management/' component={Container} />
			<IndexRoute component={Inventory} />
			<Route path=":rackId" component={Rack} />
	</Router>
);

document.addEventListener('DOMContentLoaded', function() {
	render(
		<Provider store={store}>
			<MyRouter />
		</Provider>,
		document.getElementById('app')
	);
});
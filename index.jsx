import React from 'react';
import render from 'react-dom';
import store from './flow/store.js';
import Provider from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

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
			<Route path=":rackId" component={Inventory} />
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
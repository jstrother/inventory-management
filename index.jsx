import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import store from './flow/store.js';
import Rack from './components/rack.jsx';
import Inventory from './components/inventory.jsx';
 
const Container = (
	<div>
		<h1>Inventory</h1>
		{props.children}
	</div>
);

const routes = (
	<Router history={hashHistory}>
		<Route path='/inventory/' component={Container} />
			<IndexRoute component={Inventory} />
			<Route path=":rackId" component={Rack} />
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
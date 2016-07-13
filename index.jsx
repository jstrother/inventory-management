const React = require('react');
const ReactDom = require('react-dom');
const Provider = require('react-redux').Provider;
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const hashHistory = require('react-router').hashHistory;

const Rack = require('./components/rack.jsx');
 
const routes = (
	<Router history={hashHistory}>
		<Route path='/inventory' component={Rack} />
	</Router>
);

document.addEventListener('DOMContentLoaded', function() {
	ReactDom.render(
		<Provider store={store}>
			routes
		</Provider>,
		document.getElementById('app')
	);
});
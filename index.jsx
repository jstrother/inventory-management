import 'React' from 'react';
import 'ReactDom' from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

const Rack = require('./components/rack.jsx');
 
const routes = (
	<Router history={hashHistory}>
		<Route path='/inventory' component={Rack} />
	</Router>
);

document.addEventListener('DOMContentLoaded', function() {
	ReactDom.render(routes, document.getElementById('app'))
});
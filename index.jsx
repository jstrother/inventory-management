// top-level of front-end

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// these next two allow for use of material-ui components thru the project
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Inventory from './components/inventory.jsx';
import PalletSocketListener from './socket-listeners/palletListener.js';
import ProductsSocketListener from './socket-listeners/productsListener.js';
import store from './flow/store.js';

PalletSocketListener(store.getState());
ProductsSocketListener(store.getState());
injectTapEventPlugin();

console.log('store', store);
// let myStore = store.getState();
// console.log('myStore', myStore);

render(
	<Provider store={store} >
		<MuiThemeProvider muiTheme={getMuiTheme()} >
			<Inventory />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app')
);
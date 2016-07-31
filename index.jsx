import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// these next two allow for use of material-ui components thru the project
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Inventory from './components/inventory.jsx';
import PalletSocketListener from './socket-listeners/pallet.js';
import ProductsSocketListener from './socket-listeners/products.js';
import store from './flow/store.js';

PalletSocketListener(store);
ProductsSocketListener(store);
injectTapEventPlugin();

render(
	<Provider store={store} >
		<MuiThemeProvider muiTheme={getMuiTheme()} >
			<Inventory />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('app')
);
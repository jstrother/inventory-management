import React from 'react';
import render from 'react-dom';
import Provider from 'react-redux';
import store from './flow/store.js';
import PalletSocketListener from './socket-listeners/pallet.js';
import TotalsSocketListener from './socket-listeners/totals.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Inventory from './components/inventory.jsx';

PalletSocketListener(store);
injectTapEventPlugin();

render(
	<Provider store={store} >
		<Inventory />
	</Provider>,
	document.getElementById('app')
);
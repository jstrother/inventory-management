import React from 'react';
import {Table, TableBody} from 'material-ui/Table';
import Products from './products.jsx';
import AddProducts from './add-products.jsx';
import UpdateProducts from './update-products.jsx';
import io from 'socket.io-client';
const socket = io.connect('/');

export default class ProductsList extends React.Component {

	render() {
		return (
			<div>
				<Table>
					<TableBody>
						{this.props.productsList.map(products => <Products key={products.id} products={products} /> )}
					</TableBody>
				</Table>
				<AddProducts />
				<UpdateProducts />
			</div>
		);
	};
}
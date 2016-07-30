import React from 'react';
import {Table, TableBody} from 'material-ui/Table';
import Products from './products.jsx';
import AddProducts from './add-products.jsx';
import UpdateProducts from './update-products.jsx';
import io from 'socket.io-client';
const socket = io.connect('/');

const that = this;
export default class ProductsList extends React.Component {
	render() {
		return (
			<div>
				<Table>
					<TableBody>
						{that.props.productsList.map(products => <Products key={products.id} products={products} /> )}
					</TableBody>
				</Table>
				<AddProducts />
				<UpdateProducts />
			</div>
		);
	};
}
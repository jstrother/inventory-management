import React from 'react';
import {Table, TableBody} from 'material-ui/Table';
import Product from './product.jsx';
import AddProduct from './add-product.jsx';

export default class ProductList extends React.Component {
	render() {
		return (
			<div>
				<Table>
					<TableBody>
						{this.props.products.map(product => <Product key={product.id} product={product} /> )}
					</TableBody>
				</Table>
				<AddProduct />
			</div>
		);
	}
}
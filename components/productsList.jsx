// imported into inventory.jsx

import React from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import Products from './products.jsx';
import AddProducts from './add-products.jsx';
import io from 'socket.io-client';
import {productsData, updateProducts, deleteProducts} from '../flow/productsActions.js';
const socket = io.connect('/');
// need to handle productsData
class ProductsList extends React.Component {
	handleUpdate(products) {
		socket.emit('products:client:update',  products => {
			products: products
		});
	};
	handleDelete(products) {
		socket.emit('products:client:delete',  products => {
			products: products
		});
	};
	// need buttons for each of the above
	render() {
		return (
			<div>
				<h3>Totals by Product</h3>
				<Table>
					<TableHeader displaySelectAll={false}>
						<TableRow>
							<TableHeaderColumn key='allTypes'>Types</TableHeaderColumn>
							<TableHeaderColumn key='allNumCases'>Number of Cases</TableHeaderColumn>
							<TableHeaderColumn key='allNumPops'>Number of Loose Pops</TableHeaderColumn>
							<TableHeaderColumn key='allNumBars'>Number of Loose Bars</TableHeaderColumn>
							<TableHeaderColumn key='allLocations'>Locations</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						<Products
							allTypes={this.props.allTypes}
							allNumCases={this.props.allNumCases}
							allNumPops={this.props.allNumPops}
							allNumBars={this.props.allNumBars}
							allLocations={this.props.allLocations} />
					</TableBody>
				</Table>
				<AddProducts />
			</div>
		);
	};
}
// need to figure out how to breakdown Products component so it displays correctly on table
export default connect()(ProductsList);
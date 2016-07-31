import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn} from 'material-ui/Table';
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
					<TableHeader>
						<TableHeaderColumn>Types</TableHeaderColumn>
						<TableHeaderColumn>Number of Cases</TableHeaderColumn>
						<TableHeaderColumn>Number of Loose Pops</TableHeaderColumn>
						<TableHeaderColumn>Number of Loose Bars</TableHeaderColumn>
						<TableHeaderColumn>Locations</TableHeaderColumn>
					</TableHeader>
					<TableBody>
						<Products />
					</TableBody>
				</Table>
				<AddProducts />
				<UpdateProducts />
			</div>
		);
	};
}
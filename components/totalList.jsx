import React from 'react';
import {Table, TableBody} from 'material-ui/Table';
import Total from './total.jsx';
import AddProduct from './add-product.jsx';

export default class TotalList extends React.Component {
	render() {
		return (
			<div>
				<Table>
					<TableBody>
						{this.props.totals.map(total => <Total key={total.id} total={total} /> )}
					</TableBody>
				</Table>
				<AddProduct />
			</div>
		);
	}
}
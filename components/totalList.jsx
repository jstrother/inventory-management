import React from 'react';
import {Table, TableBody} from 'material-ui/Table';
import Total from './total.jsx';

export default class TotalList extends React.Component {
	render() {
		return (
			<Table>
				<TableBody>
					{this.props.totals.map(total => <Total key={total.id} total={total} /> )}
				</TableBody>
			</Table>
		);
	}
}
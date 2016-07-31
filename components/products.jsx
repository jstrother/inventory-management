// imported into productsList.jsx

import React from 'react';
import {connect} from 'react-redux';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import io from 'socket.io-client';
const socket = io.connect('/inventory');

class Products extends React.Component {
	render() {
		return (
			<TableRow>
				<TableRowColumn>{this.props.allTypes}</TableRowColumn>
				<TableRowColumn>{this.props.allNumCases}</TableRowColumn>
				<TableRowColumn>{this.props.allNumPops}</TableRowColumn>
				<TableRowColumn>{this.props.allNumBars}</TableRowColumn>
				<TableRowColumn>{this.props.allLocations}</TableRowColumn>
			</TableRow>
		);
	};
}

export default connect()(Products);
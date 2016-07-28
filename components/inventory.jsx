// imported into index.jsx
  
  import createClass from 'react';
  import connect from 'react-redux';

 const Inventory = createClass({
 		// don't forget to create table to display totals
  	render: function() {
 		return (
 			<div className='inventory'>
 				
 			</div>
 		);
 	}
 });
 
 const Container = connect()(Inventory);
 
 module.exports = Container;
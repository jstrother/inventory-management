// imported into index.jsx
  
  import {createClass} from 'react';
  import {connect} from 'react-redux';
  let chAlmTotal = [], seaSaltTotal = [], dsaTotal = [], msaTotal = [], chiliTotal = [], tcTotal = [], eightyFiveTotal = [], seventyTotal = [], fortyFiveTotal = [], orangeTotal = [], mintTotal = [], raspTotal = [], gingerTotal = [], brqcTotal = [], toffeeTotal = [], kcBananaTotal = [], kcRaspTotal = [], kcAlmTotal = [], breadTotal = [], cocCurryTotal = [], coffeeTotal = [], figTotal = [], chaiTotal = [], hazelnutTotal = [], abcTotal = [], dpbcTotal = [], mpbcTotal = [], cbClassicTotal = [], cbAlmTotal = [], cbMintTotal = [], bake85Total = [], bake70Total = [], quinCocTotal = [];
 
 switch (this.props.type) {
 	case 'Cherry Almond':
 		// add code that takes totals up all of this type and pushes to chAlmTotal
 		break;
 	case 'Sea Salt':
 		// add code that takes totals up all of this type and pushes to seaSaltTotal
 		break;
 	case 'DSA':
 		// add code that takes totals up all of this type and pushes to dsaTotal
 		break;
 	case 'MSA':
 		// add code that takes totals up all of this type and pushes to msaTotal
 		break;
 	case 'Chili':
 		// add code that takes totals up all of this type and pushes to chiliTotal
 		break;
 	case 'Toasted Coconut':
 		// add code that takes totals up all of this type and pushes to tcTotal
 		break;
 	case '85%':
 		// add code that takes totals up all of this type and pushes to eightyFiveTotal
 		break;
 	case '70%':
 		// add code that takes totals up all of this type and pushes to seventyTotal
 		break;
 	case '45%':
 		// add code that takes totals up all of this type and pushes to fortyFiveTotal
 		break;
 	case 'Orange':
 		// add code that takes totals up all of this type and pushes to orangeTotal
 		break;
 	case 'Mint':
 		// add code that takes totals up all of this type and pushes to mintTotal
 		break;
 	case 'Raspberry':
 		// add code that takes totals up all of this type and pushes to raspTotal
 		break;
 	case 'Ginger':
 		// add code that takes totals up all of this type and pushes to gingerTotal
 		break;
 	case 'BRQC':
 		// add code that takes totals up all of this type and pushes to brqcTotal
 		break;
 	case 'Salted Toffee':
 		// add code that takes totals up all of this type and pushes to toffeeTotal
 		break;
 	case 'KC Banana':
 		// add code that takes totals up all of this type and pushes to kcBananaTotal
 		break;
 	case 'KC Almond':
 		// add code that takes totals up all of this type and pushes to kcAlmTotal
 		break;
 	case 'KC Raspberry':
 		// add code that takes totals up all of this type and pushes to kcRaspTotal
 		break;
 	case 'Bread':
 		// add code that takes totals up all of this type and pushes to breadTotal
 		break;
 	case 'Coconut Curry':
 		// add code that takes totals up all of this type and pushes to cocCurryTotal
 		break;
 	case 'Fig Fennel':
 		// add code that takes totals up all of this type and pushes to figTotal
 		break;
 	case 'Coffee':
 		// add code that takes totals up all of this type and pushes to coffeeTotal
 		break;
 	case 'Hazelnut Crunch':
 		// add code that takes totals up all of this type and pushes to hazelnutTotal
 		break;
 	case 'Chai':
 		// add code that takes totals up all of this type and pushes to chaiTotal
 		break;
 	case 'Almond Butter Cups':
 		// add code that takes totals up all of this type and pushes to abcTotal
 		break;
 	case 'DPBC':
 		// add code that takes totals up all of this type and pushes to dpbcTotal
 		break;
 	case 'MPBC':
 		// add code that takes totals up all of this type and pushes to mpbcTotal
 		break;
 	case 'CB - Classic':
 		// add code that takes totals up all of this type and pushes to cbClassicTotal
 		break;
 	case 'CB - Salted Almond':
 		// add code that takes totals up all of this type and pushes to cbAlmTotal
 		break;
 	case 'CB - Mint Milk':
 		// add code that takes totals up all of this type and pushes to cbMintTotal
 		break;
 	case '85% Baking':
 		// add code that takes totals up all of this type and pushes to bake85Total
 		break;
 	case '70% Baking':
 		// add code that takes totals up all of this type and pushes to bake70Total
 		break;
 	case 'Quinoa Coconut':
 		// add code that takes totals up all of this type and pushes to quinCocTotal
 		break;
 }
 // take above totals and display them in Inventory table below using the following headers:
 // Type, Quantity, Locations
 
 const Inventory = createClass({
  	render: function() {
 		return (
 			<div className='inventory'>
 				
 			</div>
 		);
 	}
 });
 
 const Container = connect()(Inventory);
 
 module.exports = Container;
// imported into reducers.js

export const newPallet = pallet => {
	return {
		type: 'pallet:insert',
		pallet
	}
}

export const updatePallet = pallet => {
	return {
		type: 'pallet:update',
		pallet
	}
}

export const deletePallet = pallet => {
	return {
		type: 'pallet:delete',
		pallet
	}
}

export const newproducts = products => {
	return {
		type: 'products:insert',
		products
	}
}

export const updateproducts = products => {
	return {
		type: 'products:update',
		products
	}
}

export const deleteproducts = products => {
	return {
		type: 'products:delete',
		products
	}
}
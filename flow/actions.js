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

export const newProduct = product => {
	return {
		type: 'products:insert',
		product
	}
}

export const updateProduct = product => {
	return {
		type: 'products:update',
		product
	}
}

export const deleteProduct = product => {
	return {
		type: 'products:delete',
		product
	}
}
const initState = {
  
}

const productReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PRODUCT':
            console.log('created', action.product)
            return state;
        case 'CREATE_PRODUCT_ERROR':
            console.log('error', action.err)
            return state;
        case 'UPDATE_PRODUCT':
            console.log('updated', action.product)
            return state;
        case 'DELETE_PRODUCT':
            console.log('deleted', action.id)
            return state;
        default:
            return state
    }
  
   // return state
}

export default productReducer;
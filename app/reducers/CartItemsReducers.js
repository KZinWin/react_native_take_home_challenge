const CartItemsReducer = (state , action) =>{
    console.log(state,action)
    
    if( action.type == 'added' ) {
       state.push(action.data)
    }

    if( action.type == 'delete' ) {
        state.splice(action.index,1)
        
    }

    return state
}

export default CartItemsReducer;
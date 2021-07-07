const initialState = {
    items:{},
    totalPrice:0,
    totalCount:0
}


 const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ('ADD_PIZZA'):
            const items=state.items
            
            if (!items[action.payload.id]) 
                items[action.payload.id]=[]
            items[action.payload.id].push(action.payload)
            
            return {
                ...state,
                totalPrice:state.totalPrice+action.payload.price,
                totalCount:state.totalCount+1,
                items
            }
        default: 
            return state
    }
}

export default cartReducer
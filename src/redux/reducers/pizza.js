const initialState = {
    items:[],
    isLoaded:false
}

 const pizza = (state= initialState, action) => {
    switch(action.type) {
        case ('GET_ITEMS'):
            return {
                ...state,
                items:action.payload,
                isLoaded:true
        
            }
        default:
            return state
    }
}

export default pizza
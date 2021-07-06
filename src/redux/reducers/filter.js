const initialState = {
    orderBy:'popular',
    category:0
}

const filter = (state= initialState, action) => {
    switch(action.type) {
        case ('SET_ORDER_BY'):
            return {
                ...state,
                orderBy:action.payload
            }
        case ('SET_CATEGORY'):
            return {
                ...state,
                category:action.payload
            }
        default:
            return state
    }
}

export default filter
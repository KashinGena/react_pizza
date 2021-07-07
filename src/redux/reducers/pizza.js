import sort from '../../helpers/sort'

const initialState = {
    items:[],
    filteredItems:[],
    isLoaded:false
}

 const pizza = (state = initialState, action) => {
    switch(action.type) {
        case ('GET_ITEMS'):
            return {
                ...state,
                items:action.payload,
                filteredItems:action.payload,
                isLoaded:true
        
            }
        case('FILTER_ITEMS'):
            const category= action.payload.category
            const orderBy =action.payload.orderBy
            const filterCategoryItems=(category===0)?state.items:state.items.filter(item => item.category===category)
            const filteredItems = sort([...filterCategoryItems],orderBy)
            console.log(filteredItems);
            
            return {
                ...state,
                filteredItems
                
            }
        default:
            return state
    }
}

export default pizza
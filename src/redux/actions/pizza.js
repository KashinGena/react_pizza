import axios from "axios";

export const fetchPizzas = (category, sortBy) => {
    return (dispatch) => {
        axios.get('http://localhost:3000/db.json',{ params: {
            category: category,
            _sort: sortBy,
            _order: 'desc'
          }})
      .then((resp) => {
        
        
         dispatch(setPizzas(resp.data.pizzas)) })
    }
}

export const setPizzas = (items) => {
    return {
        type:'GET_ITEMS',
        payload:items
    }
}

export const filterPizzas = (category,orderBy) => {
    return {
        type:'FILTER_ITEMS',
        payload:{category,orderBy}
    }
}
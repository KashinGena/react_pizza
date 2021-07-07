import axios from "axios";

export const fetchPizzas = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/db.json')
      .then((resp) => {
        console.log(resp.data);
        
         dispatch(setPizzas(resp.data.pizzas)) })
    }
}

export const setPizzas = (items) => {
    return {
        type:'GET_ITEMS',
        payload:items
    }
}
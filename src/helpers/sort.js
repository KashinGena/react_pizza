export default function sort (arr, type) {

    
    switch (type) {
        case ('popular'): 
            return arr.sort((a,b) => b.rating-a.rating)
        case ('price'):
            return arr.sort((a,b) => a.price-b.price)
        case ('alphabet'):
            return arr.sort((function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            }))
        default:
            return arr
    }
}
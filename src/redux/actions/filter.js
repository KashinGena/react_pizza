export const setOrderBy = (order) => {
    return {
        type:'SET_ORDER_BY',
        payload:order
    }
}

export const setCategory = (index) => {
    return {
        type:'SET_CATEGORY',
        payload:index
    }
}
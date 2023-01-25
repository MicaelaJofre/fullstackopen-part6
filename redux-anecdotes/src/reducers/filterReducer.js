
export const reducerFilter = (state = '', action) => {
    switch (action.type) {
        case '@filter/setFilter':
            return action.data.filter
        default:
            return state
    }
}


export const setFilter = (filter) => {
    return {
        type: '@filter/setFilter',
        data: { filter }
    }
}
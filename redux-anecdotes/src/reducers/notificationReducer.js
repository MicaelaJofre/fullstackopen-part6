const initialState = { message: '', timeout: null }

export const notificationReducer = (state = initialState, action) => {

    switch (action.type) {
        case '@notification/set':
            return action.data
        case '@notification/clear':
            return initialState
        default: return state
    }
}

export const setNotification = (message, time) => {
    return async dispatch => {
        const timeout = setTimeout(() => dispatch(clearNotification()), time * 1000)
        dispatch({
            type: '@notification/set',
            data: {
                message,
                timeout
            }
        })
    }
}

export const clearNotification = () => {
    return {
        type: '@notification/clear'
    }
}
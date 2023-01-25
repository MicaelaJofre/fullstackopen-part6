import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducerAnecdote } from './reducers/anecdoteReducer'
import { notificationReducer } from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducerFilter } from './reducers/filterReducer'


const reducer = combineReducers({
    anecdotes: reducerAnecdote,
    notification: notificationReducer,
    filter: reducerFilter,
})
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
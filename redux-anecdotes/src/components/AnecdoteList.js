import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import Filter from './Filter'

const AnecdoteList = () => {

    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        state.anecdotes.sort((a, b) => b.votes - a.votes)
        return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    })

    const vote = (id) => {
        dispatch(voteAnecdote(id))
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            {anecdotes.map(anecdote =>
                <div key={`${anecdote.id}-id-unique`}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList
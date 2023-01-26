import { useEffect } from 'react'
import { connect } from 'react-redux'
import { voteAnecdote, initializeAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const handleAnecdotes = (state) => state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a, b) => b.votes - a.votes)

const AnecdoteList = (props) => {

    useEffect(() => {
        initializeAnecdotes()
    }, [props.initializeAnecdotes])

    const handleVote = (anecdote) => {
        props.voteAnecdote(anecdote.id)
        props.setNotification(`You voted: '${anecdote.content}'`, 2)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {props.anecdotes.map(anecdote =>
                <div key={`${anecdote.id}-id-unique`}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        anecdotes: handleAnecdotes(state)
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    initializeAnecdotes,
    setNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)
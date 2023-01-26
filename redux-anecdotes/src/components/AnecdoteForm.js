import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ setNotification, createAnecdote }) => {

    const addCreate = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        createAnecdote(content)
        setNotification(`You created: '${content}'`, 2)
    }

    return (
        <div>
            <h2>create new</h2>
            <form type='submit' onSubmit={addCreate}>
                <div>
                    <input name='anecdote' />
                    <button type='submit'>create</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (status) => {
    return {
        anecdotes: status.anecdotes
    }
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteForm)
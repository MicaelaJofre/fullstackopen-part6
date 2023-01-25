import anecdoteService from '../services/anecdotes'

export const reducerAnecdote = (state = [], action) => {

  switch (action.type) {
    case '@anecdote/initialize':
      return action.data

    case '@anecdote/create':
      return [...state, action.data]

    case '@anecdote/vote':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )

    default:
      return state
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: '@anecdote/initialize',
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: '@anecdote/create',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (id) => {
  return async dispatch => {
    const anecdoteToChange = await anecdoteService.getAll()
    const newAnecdote = anecdoteToChange.find(n => n.id === id)
    const changedAnecdote = {
      ...newAnecdote,
      votes: newAnecdote.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(id, changedAnecdote)
    dispatch({
      type: '@anecdote/vote',
      data: updatedAnecdote
    })
  }
}


import { combineReducers } from 'redux'

const origin = (state = '', action) => {
  switch (action.type) {
    case 'SET_ORIGIN':
      return action.id
    case 'CLEAR_ORIGIN':
      return '' 
    default:
      return state
  }
}

const destination = (state = '', action) => {
  switch (action.type) {
    case 'SET_DESTINATION':
      return action.id
    case 'CLEAR_DESTINATION':
      return '' 
    default:
      return state
  }
}

const transfers = (state = [], action) => {
  switch (action.type) {
    case 'COMMIT_TRANSFER':
      return [...state, {origin: action.originId, destination: action.destinationId}]
    default:
      return state
  }
}

const inPlayMode = (state = false, action) => {
  switch (action.type) {
    case 'START_PLAY':
      return true
    case 'STOP_PLAY':
      return false
    default:
      return state
  }
}

const protocol = combineReducers({
  origin,
  destination,
  transfers,
  inPlayMode
})

export default protocol
import thunk from 'redux-thunk'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { tasksReducer } from './tasks/tasks.reducer'

const reducer = combineReducers({
  tasks: tasksReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
)

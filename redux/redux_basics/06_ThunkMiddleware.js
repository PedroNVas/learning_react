import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const store = () => createStore(rootReducer, applyMiddleware(thunk));

export default store;


// util/todos_api_util.js
// synchronous API call

export const fetchTodos = () => fetch('/api/todos');


// actions/todo_actions.js
// Asynchronous API call

import * as TodoAPIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const fetchTodos = () => dispatch => (
  TodoAPIUtil
    .fetchTodos()
    .then(todos => dispatch(receiveTodos(todos)))
);

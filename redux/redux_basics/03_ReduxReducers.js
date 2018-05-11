/*
  A Redux Reducer is just a simple javascript function.
  It receives two arguments:
  * The first is the current state
  * The second is the action

  The action is used to determine what states need to change.

  The most crucial is that your reducer must be a pure function.
 */

function myReducer (state = initialState, action) {
  // ...
}

function reducer (previousState, action) {
  switch (action.type) {
    case 'SUBMIT_USER' :
      return Object.assign({}, previousState, {
        user: action.user
      })
  }
}

// This is a wrong reducer. It's mutating the previousState
function otherReducer (previousState = {}, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return action.item
    case 'EMPTY_CART':
      return {}
    case 'UPDATE_ITEMS':
      previousState.items = action.items
      return previousState
    default:
      return previousState
  }
}

const appReducer = (state, action) => {

  switch (action.type) {
    case 'DELETE_FLAVOR':
      return state.filter(e => e.flavor !== e.flavor)
    default:
      return state
  }
}

const result = appReducer(
  [
    {flavor: 'Chocolate', count: 36},
    {flavor: 'Vanilla', count: 210},
  ],
  {type: 'DELETE_FLAVOR', flavor: 'Vanilla'}
)

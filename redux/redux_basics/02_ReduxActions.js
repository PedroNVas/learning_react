/*
  A Redux Action is just a simple javascript object.
  Must have a "type" property and the value is entirely up to the developer.
  The value describes what took place (the action itself)
  Written in ALL CAPS

  Can include data too
 */

let myAction = {
  type: 'ENTIRELY_UP_TO_THE_DEVELOPER',
  id: 917
}

const LOAD_PROFILE = 'LOAD_PROFILE'

myAction = {
  type: LOAD_PROFILE
}

/*
  Prefer constants rather than strings as the values of type properties.
  Both work -- but when using constants, the console will throw an error rather
  than fail silently should there be any misspellings (e.g. LAOD_PROFILE vs. LOAD_PROFILE).

  Keep the payload as small as possible. Have your resources only send the necessary data!
 */

// An Action Creator
const submitUser = user => ({
  type: 'SUBMIT_USER',
  user
});

const mealCreator = id => ({
  type: 'CREATE_MEAL',
  id
})

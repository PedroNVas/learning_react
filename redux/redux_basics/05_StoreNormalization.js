const people = {
  kassidi: {
    name: 'Kassidi Henry',
    age: 24,
    favoriteMovie: 'Remember the Titans'
  },
  tyler: {
    name: 'Tyler McGinnis',
    age: 25,
    favoriteMovie: 'Fatigue: A JavaScript Story'
  },
  jake: {
    name: 'Jake Lingwall',
    age: 26,
    favoriteMovie: 'Casablanca'
  },
}

const friends = ['kassidi', 'jake']

friends.map((friend) => people[friend])

/*
"In a more complex app, you’re going to want different entities to
reference each other. We suggest that you keep your state as normalized as
possible, without any nesting. Keep every entity in an object stored
with an ID as a key, and use IDs to reference it from other entities, or lists."
 */

// --------------------------------------------------

const books = {
  fiction: {
    fantasy: {
      0: {
        title: 'Harry Potter and the Nested Data',
        author: 'JK Rowling'
      }
    },
    romance: {},
    scifi: {}
  },
  nonFiction: {}
}

function books (state, action) {
  const {bookType, genre, id, title} = action
  let CHANGE_TITLE = 'CHANGE_TITLE'
  if (action.type = CHANGE_TITLE) {
    return {
      ...state,
      [bookType]: {
        ...state[bookType],
        [genre]: {
          ...state[bookType][genre]
  :
    {
      [id]
    :
      {
      ...
        state[bookType][genre][id],
          title
      }
    }
  }
  }
  }
  }

  return state
}
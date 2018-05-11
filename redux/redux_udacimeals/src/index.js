import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import './index.css'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()

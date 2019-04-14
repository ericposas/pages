import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './modules/Reducer'
import App from './components/App'
import './scss/index.scss'

// inject some initial DOM into our HTML before letting React takeover
let root = document.createElement('div')
document.body.style.height = `${window.innerHeight}px`
root.style.height = `${window.innerHeight}px`
document.body.appendChild(root)
root.id = 'root'

// get persistedState from localStorage
const persistedState = JSON.parse(localStorage.getItem('pages-app'))

// Redux Store
const store = createStore(Reducer, persistedState)
store.subscribe(()=>{
  // save data to localStorage on each update
  const _state = JSON.stringify(store.getState())
  localStorage.setItem('pages-app', _state)
})

// Render
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
)

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './modules/Reducer'
import App from './components/App'
import './index.scss'

// inject some initial DOM into our HTML before letting React takeover
let root = document.createElement('div')
document.body.appendChild(root)
root.id = 'root'

// Redux Store
const store = createStore(Reducer)
store.subscribe(()=>{
  // we'll add database support here
})

// Render
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
)

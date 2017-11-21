import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import createStore from 'store/createStore'
import App from 'views/App'

import './index.css'

// Store Initialization
// ------------------------------------

const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById(`root`)

let render = () => {
  ReactDOM.render(
    <App store={store} />,
    MOUNT_NODE,
  )
}

render()

registerServiceWorker()

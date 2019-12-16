import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter, Switch } from 'react-router-dom'
import CreateEvent from './auth/components/createEvent'

const appJsx = (
  <HashRouter>
    
    <App />
    <CreateEvent/>
    
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))

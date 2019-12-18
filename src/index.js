import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter, Switch } from 'react-router-dom'
import './index.scss'
import './Assets/Stylesheets/style.css'

const appJsx = (
  <HashRouter>
    <App/>
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))

import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const createEvent = (
  <React.Fragment>
  <Link to="/createEvent">Create Event</Link>
</React.Fragment>
)

const listEvent = (
  <React.Fragment>
  <Link to="/listEvent">List Event</Link>
</React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>EVENtOS</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
      {createEvent}
      {listEvent}
    </nav>
  </header>
)

export default Header

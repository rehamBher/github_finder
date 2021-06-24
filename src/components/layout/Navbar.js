import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
export default function Navbar({ icon, title }) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <Link to="/">Home</Link>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

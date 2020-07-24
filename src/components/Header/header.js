import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./Header.module.scss";

const Header = ({ siteTitle }) => (
  <header className="container">
    <div className="row">
      <div className="col-3">
        <h1>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="col-9"></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

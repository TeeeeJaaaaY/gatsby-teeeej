import PropTypes from "prop-types"
import React from "react"
import Nav from "../Nav/nav";

import styles from "./Header.module.scss";

const Header = ({ siteTitle }) => (
  <header className={styles['header']}>
    <div className={styles['container']}>
      <div className={styles['row']}>
        <div className={styles['col-3']}>
          <h5 className={styles['header__logo']}>TJ</h5>
        </div>
        <div className={styles['col-9']}>
          <Nav></Nav>
        </div>
      </div>
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

import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./Nav.module.scss"

const Nav = ({links}) => (
    <nav className={styles['navigation']}>
        <ul>
            {links.map((link, i) => <li><Link to={link} key={i}>Link</Link></li>)}
        </ul>
    </nav>
)

Nav.propTypes = {
    links: PropTypes.array,
}
  
Nav.defaultProps = {
    links: [
        "/",
        "/",
        "/"
    ]
}
  

export default Nav
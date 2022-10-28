import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./spacer.module.scss"

const Spacer = ({ x, y = "md", children }) => {
  return (
    <div className={classNames(x && styles[`x-${x}`], y && styles[`y-${y}`])}>
      {children}
    </div>
  )
}

Spacer.propTypes = {
  x: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  y: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
}

export default Spacer

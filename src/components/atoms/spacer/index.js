import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./spacer.module.scss"
import { camelize } from "@lib/helper"

const Spacer = ({ x, y = "md", children }) => {
  return (
    <div
      className={cn(
        styles.spacer,
        x && styles[camelize(`x-${x}`)],
        y && styles[camelize(`y-${y}`)]
      )}
    >
      {children}
    </div>
  )
}

Spacer.propTypes = {
  x: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  y: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
}

export default Spacer

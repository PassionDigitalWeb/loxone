import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./spacer.module.scss"
import { camelize } from "@lib/helper"

const Spacer = ({
  x,
  y = "md",
  isHR = false,
  children,
  className,
  ...props
}) => {
  const Node = !isHR ? "div" : "hr"
  return (
    <Node
      className={cn(
        styles.spacer,
        x && styles[camelize(`x-${x}`)],
        y && styles[camelize(`y-${y}`)],
        className
      )}
      {...props}
    >
      {children}
    </Node>
  )
}

Spacer.propTypes = {
  x: PropTypes.oneOf(["xsm", "sm", "md", "lg", "xl"]),
  y: PropTypes.oneOf(["xsm", "sm", "md", "lg", "xl"]),
}

export default Spacer
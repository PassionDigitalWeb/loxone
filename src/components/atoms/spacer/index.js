import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./spacer.module.scss"
import { camelize } from "@lib/helper"

export const Spacer = ({
  x,
  y = "md",
  type = "padding",
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
        styles[type],
        styles[isHR + "HrColor"],
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
  type: PropTypes.oneOf(["padding", "margin"]),
}

export default Spacer

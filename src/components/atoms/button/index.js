import React from "react"
import { Link } from "gatsby"

import * as PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./button.module.scss"
import { camelize } from "@lib/helper"

export const Button = ({
  as = "button",
  variant = "Button",
  color = "green",
  size = "Medium",
  isOutlined = false,
  className,
  children,
  ...props
}) => {
  let Node = as || (props.href && "a")

  //check if Link props are there
  if (props.to) {
    Node = Link
  }

  return (
    <Node
      className={cn(
        styles.button,
        variant && styles[camelize(`variant-${variant}`)],
        size && styles[camelize(`size-${size}`)],
        isOutlined && styles.isOutlined,
        color && styles[camelize(`color-${color}`)],
        className
      )}
      {...props}
    >
      {children}
    </Node>
  )
}

Button.propTypes = {
  as: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "button"]),
  isOutlined: PropTypes.bool,
  color: PropTypes.oneOf(["green", "dark-grey", "clear-white"]),
  href: PropTypes.string,
  to: PropTypes.string,
}

export default Button

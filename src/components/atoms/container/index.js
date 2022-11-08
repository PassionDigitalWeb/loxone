import React from "react"
import * as styles from "./container.module.scss"
import classNames from "classnames/bind"
import PropTypes from "prop-types"
import { camelize } from "@lib/helper"

const cx = classNames.bind(styles)

export const Container = ({
  size = "lg",
  padding = "sm",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        styles.container,
        styles[camelize(`size-${size}`)],
        styles[camelize(`padding-${padding}`)],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  size: PropTypes.oneOf(["none", "sm", "md", "lg"]),
  padding: PropTypes.oneOf(["none", "xs", "sm", "md", "lg"]),
}

export default Container

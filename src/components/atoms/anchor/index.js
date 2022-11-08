import React from "react"
import { Link } from "gatsby"

import * as PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./anchor.module.scss"

export const Anchor = ({
  isLight = false,
  href,
  to,
  underlined,
  className,
  children,
  ...props
}) => {
  let Node = props.to ? Link : "a"

  return (
    <Node
      className={cn(
        styles.link,
        underlined && styles.underlined,
        isLight && styles.light,
        className
      )}
      to={to}
      href={href}
      {...props}
    >
      {children}
    </Node>
  )
}

Anchor.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  isLight: PropTypes.bool,
  underlined: PropTypes.bool,
}

export default Anchor

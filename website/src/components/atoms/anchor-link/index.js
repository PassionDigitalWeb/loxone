import React from "react"
import { Link } from "gatsby"

import * as PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./anchor-link.module.scss"

export const AnchorLink = ({
  isLight = false,
  href,
  to,
  className,
  children,
  ...props
}) => {
  let Node = props.to ? Link : "a"

  return (
    <Node
      className={cn(styles.link, isLight && styles.light, className)}
      {...props}
    >
      {children}
    </Node>
  )
}

AnchorLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  isLight: PropTypes.bool,
}

export default AnchorLink

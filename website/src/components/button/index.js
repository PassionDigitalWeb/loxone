import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import * as styles from "./button.module.scss"

function Button(props) {
  console.log({ styles })
  return <div className={cn(styles.button)}>test button</div>
}

export default Button

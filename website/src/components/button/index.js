import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames/bind"
import * as styles from "./button.module.scss"
const cx = classnames.bind(styles) // <-- explicitly bind your styles

function Button(props) {
  return <div className={cx("button")}>test button</div>
}

export default Button

import React from "react"
import * as styles from "./styles.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"
import classNames from "classnames"

export const Card = ({ children, ...props }) => {
  return (
    <div className={classNames(styles.card)} {...props}>
      {children}
    </div>
  )
}

export const Cards = ({ children }) => {
  return <div className={classNames(styles.cards)}>{children}</div>
}

const Asset = ({ children }) => {
  return <div className={styles.asset}>{children}</div>
}

const Content = ({ children }) => {
  return <div className={styles.content}>{children}</div>
}

Card.Asset = Asset
Card.Content = Content

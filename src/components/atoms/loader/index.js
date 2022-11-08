import React from "react"
import * as styles from "./loader.module.scss"
import ReactLoading from "react-loading"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"

const Loader = ({ isFull }) => {
  return (
    <div className={styles.loader}>
      <Spacer className={styles.inner} y="sm">
        <ReactLoading type="spin" color="var(--color-brand-green)" />
      </Spacer>
    </div>
  )
}

export default Loader

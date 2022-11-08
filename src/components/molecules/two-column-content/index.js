import React from "react"
import * as styles from "./two-col-content.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"

const Col = ({ title, children, ...props }) => {
  return <div {...props}>{children}</div>
}
export const TwoColContent = ({ title, children, ...props }) => {
  return (
    <div className={styles.twoColContent} {...props}>
      <Spacer y="lg">
        <Container size="lg">
          <div className={styles.twoColContentGrid}>{children}</div>
        </Container>
      </Spacer>
    </div>
  )
}

TwoColContent.Col = Col

export default TwoColContent

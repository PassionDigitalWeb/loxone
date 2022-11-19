import React from "react"
import * as styles from "./styles.module.scss"
import { Container } from "@components/atoms"
import Spacer from "@components/atoms/spacer"

export const SplitIntro = ({ title, children, ...props }) => {
  return (
    <div className={styles.splitIntroCon}>
      <div className={styles.bgShape}>
        <svg
          width="489"
          height="550"
          viewBox="0 0 489 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M243.797 61.625L138.791 243.5L33.7854 61.625L243.797 61.625Z"
            fill="#FAFAFA"
            stroke="#333333"
          />
          <path
            opacity="0.4"
            d="M33.6228 426.729L244.5 61.4785L455.377 426.729H33.6228Z"
            stroke="#69C350"
          />
        </svg>
      </div>
      <Spacer y="lg">
        <Container size="lg">
          <div className={styles.splitIntroGrid}>
            {title && <div>{title}</div>}
            {children && <div>{children}</div>}
          </div>
        </Container>
      </Spacer>
    </div>
  )
}

SplitIntro.propTypes = {}

export default SplitIntro

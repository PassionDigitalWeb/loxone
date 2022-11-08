import React, { useEffect, useState } from "react"
import * as styles from "./header.module.scss"
import { Anchor, Button, ButtonGroup, Container, Logo } from "@components/atoms"
import classNames from "classnames"
import Spacer from "@components/atoms/spacer"
import { Link } from "gatsby"
import { useShortHead } from "@lib/hooks/useShortHead"

export const Header = ({ children, isLight, ...props }) => {
  const [light, setLight] = useState(isLight)
  const isShort = useShortHead()
  useEffect(() => {
    setLight(!isShort)
  }, [isShort])

  return (
    <header
      className={classNames(styles.header, isShort && styles.short)}
      {...props}
    >
      <Container size="none" padding="xs">
        <div className={styles.inner}>
          <Link to="/" className={styles.logoWrap}>
            <Logo
              variant={isShort ? "small" : "large"}
              className={styles.logo}
            />
          </Link>

          <div className={styles.navCtaCol}>
            <div className={styles.navCtaWrap}>
              <div className={styles.navCol}>
                <Spacer y="sm">
                  <nav className={styles.nav}>
                    <Anchor className={styles.navItem} isLight={light}>
                      <span>Case Studies</span>
                    </Anchor>

                    <Anchor className={styles.navItem} isLight={light}>
                      <span>Architects</span>
                    </Anchor>

                    <Anchor className={styles.navItem} isLight={light}>
                      <span>FAQs</span>
                    </Anchor>

                    <Anchor className={styles.navItem} isLight={light}>
                      <span>Contact</span>
                    </Anchor>
                  </nav>
                </Spacer>
              </div>

              <div className={styles.cta}>
                <ButtonGroup>
                  <Button
                    variant="text"
                    color={light ? "clear-white" : "clear"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M16.4062 1.78125L13.1562 1.03125C12.8125 0.9375 12.4375 1.125 12.2812 1.46875L10.7812 4.96875C10.6562 5.28125 10.75 5.625 11 5.84375L12.9062 7.40625C11.7812 9.78125 9.8125 11.7812 7.375 12.9375L5.8125 11.0312C5.59375 10.7812 5.25 10.6875 4.9375 10.8125L1.4375 12.3125C1.09375 12.4688 0.9375 12.8438 1 13.1875L1.75 16.4375C1.84375 16.7812 2.125 17 2.5 17C10.5 17 17 10.5312 17 2.5C17 2.15625 16.75 1.875 16.4062 1.78125Z"
                        fill="#69C350"
                      />
                    </svg>{" "}
                    <span>020 8342 5016</span>
                  </Button>
                  <Button variant="button">Button Label</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {}

export default Header

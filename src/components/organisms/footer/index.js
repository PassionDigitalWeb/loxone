import React from "react"
import * as styles from "./footer.module.scss"
import { Anchor, Container, Heading, Logo, Text } from "@components/atoms"
import classNames from "classnames"
import Spacer from "@components/atoms/spacer"
import Banner from "@components/molecules/banner"
import { Link } from "gatsby"
import { useSiteMetadata } from "@lib/hooks/useSiteData"
import { PRichText } from "@lib/richtext"
import { PrismicLink } from "@prismicio/react"

const SocialIcon = ({ icon_type }) => {
  return (
    <>
      {icon_type === "facebook" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            d="M15.625 0.75H1.875C0.820312 0.75 0 1.60938 0 2.625V16.375C0 17.4297 0.820312 18.25 1.875 18.25H7.22656V12.3125H4.76562V9.5H7.22656V7.39062C7.22656 4.96875 8.67188 3.60156 10.8594 3.60156C11.9531 3.60156 13.0469 3.79688 13.0469 3.79688V6.17969H11.8359C10.625 6.17969 10.2344 6.92188 10.2344 7.70312V9.5H12.9297L12.5 12.3125H10.2344V18.25H15.625C16.6406 18.25 17.5 17.4297 17.5 16.375V2.625C17.5 1.60938 16.6406 0.75 15.625 0.75Z"
            fill="#4267B2"
          />
        </svg>
      )}
      {icon_type === "twitter" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            d="M15.625 0.75H1.875C0.820312 0.75 0 1.60938 0 2.625V16.375C0 17.4297 0.820312 18.25 1.875 18.25H15.625C16.6406 18.25 17.5 17.4297 17.5 16.375V2.625C17.5 1.60938 16.6406 0.75 15.625 0.75ZM13.7109 6.96094C13.7109 7.07812 13.7109 7.19531 13.7109 7.3125C13.7109 10.6719 11.1328 14.5781 6.40625 14.5781C4.96094 14.5781 3.63281 14.1875 2.5 13.4453C2.69531 13.4844 2.89062 13.4844 3.08594 13.4844C4.29688 13.4844 5.39062 13.0547 6.28906 12.3906C5.15625 12.3516 4.21875 11.6094 3.86719 10.5938C4.29688 10.6719 4.64844 10.6719 5.03906 10.5547C3.86719 10.3203 3.00781 9.30469 3.00781 8.05469V8.01562C3.32031 8.21094 3.71094 8.32812 4.14062 8.32812C3.4375 7.85938 3.00781 7.07812 3.00781 6.21875C3.00781 5.71094 3.125 5.28125 3.35938 4.89062C4.60938 6.45312 6.52344 7.46875 8.63281 7.58594C8.28125 5.86719 9.57031 4.42188 11.1328 4.42188C11.875 4.42188 12.5391 4.73438 13.0078 5.24219C13.5938 5.125 14.1406 4.92969 14.6484 4.61719C14.4531 5.24219 14.0234 5.71094 13.5156 6.02344C14.0234 5.98438 14.5312 5.82812 15 5.63281C14.6484 6.14062 14.1797 6.60938 13.7109 6.96094Z"
            fill="#1DA1F2"
          />
        </svg>
      )}
      {icon_type === "instagram" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M9.75 5.00781C7.25 5.00781 5.25781 7.03906 5.25781 9.5C5.25781 12 7.25 13.9922 9.75 13.9922C12.2109 13.9922 14.2422 12 14.2422 9.5C14.2422 7.03906 12.2109 5.00781 9.75 5.00781ZM9.75 12.4297C8.14844 12.4297 6.82031 11.1406 6.82031 9.5C6.82031 7.89844 8.10938 6.60938 9.75 6.60938C11.3516 6.60938 12.6406 7.89844 12.6406 9.5C12.6406 11.1406 11.3516 12.4297 9.75 12.4297ZM15.4531 4.85156C15.4531 4.26562 14.9844 3.79688 14.3984 3.79688C13.8125 3.79688 13.3438 4.26562 13.3438 4.85156C13.3438 5.4375 13.8125 5.90625 14.3984 5.90625C14.9844 5.90625 15.4531 5.4375 15.4531 4.85156ZM18.4219 5.90625C18.3438 4.5 18.0312 3.25 17.0156 2.23438C16 1.21875 14.75 0.90625 13.3438 0.828125C11.8984 0.75 7.5625 0.75 6.11719 0.828125C4.71094 0.90625 3.5 1.21875 2.44531 2.23438C1.42969 3.25 1.11719 4.5 1.03906 5.90625C0.960938 7.35156 0.960938 11.6875 1.03906 13.1328C1.11719 14.5391 1.42969 15.75 2.44531 16.8047C3.5 17.8203 4.71094 18.1328 6.11719 18.2109C7.5625 18.2891 11.8984 18.2891 13.3438 18.2109C14.75 18.1328 16 17.8203 17.0156 16.8047C18.0312 15.75 18.3438 14.5391 18.4219 13.1328C18.5 11.6875 18.5 7.35156 18.4219 5.90625ZM16.5469 14.6562C16.2734 15.4375 15.6484 16.0234 14.9062 16.3359C13.7344 16.8047 11 16.6875 9.75 16.6875C8.46094 16.6875 5.72656 16.8047 4.59375 16.3359C3.8125 16.0234 3.22656 15.4375 2.91406 14.6562C2.44531 13.5234 2.5625 10.7891 2.5625 9.5C2.5625 8.25 2.44531 5.51562 2.91406 4.34375C3.22656 3.60156 3.8125 3.01562 4.59375 2.70312C5.72656 2.23438 8.46094 2.35156 9.75 2.35156C11 2.35156 13.7344 2.23438 14.9062 2.70312C15.6484 2.97656 16.2344 3.60156 16.5469 4.34375C17.0156 5.51562 16.8984 8.25 16.8984 9.5C16.8984 10.7891 17.0156 13.5234 16.5469 14.6562Z"
            fill="#833AB4"
          />
        </svg>
      )}
    </>
  )
}

export const FooterNav = ({ children, ...props }) => {
  const siteData = useSiteMetadata()

  return (
    <div className={styles.footerNav}>
      <div>
        <div className={styles.footerNavTitle}>
          <Text color="grey" weight="600">
            Get in touch
          </Text>
        </div>
        <nav className={styles.footerNavi}>
          {siteData?.address && (
            <div className={styles.footerNavItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  d="M4 4.625C4 4.84375 4.15625 5 4.375 5H5.625C5.8125 5 6 4.84375 6 4.625V3.375C6 3.1875 5.8125 3 5.625 3H4.375C4.15625 3 4 3.1875 4 3.375V4.625ZM8.375 5H9.625C9.8125 5 10 4.84375 10 4.625V3.375C10 3.1875 9.8125 3 9.625 3H8.375C8.15625 3 8 3.1875 8 3.375V4.625C8 4.84375 8.15625 5 8.375 5ZM4.375 8H5.625C5.8125 8 6 7.84375 6 7.625V6.375C6 6.1875 5.8125 6 5.625 6H4.375C4.15625 6 4 6.1875 4 6.375V7.625C4 7.84375 4.15625 8 4.375 8ZM8.375 8H9.625C9.8125 8 10 7.84375 10 7.625V6.375C10 6.1875 9.8125 6 9.625 6H8.375C8.15625 6 8 6.1875 8 6.375V7.625C8 7.84375 8.15625 8 8.375 8ZM6 10.625V9.375C6 9.1875 5.8125 9 5.625 9H4.375C4.15625 9 4 9.1875 4 9.375V10.625C4 10.8438 4.15625 11 4.375 11H5.625C5.8125 11 6 10.8438 6 10.625ZM8.375 11H9.625C9.8125 11 10 10.8438 10 10.625V9.375C10 9.1875 9.8125 9 9.625 9H8.375C8.15625 9 8 9.1875 8 9.375V10.625C8 10.8438 8.15625 11 8.375 11ZM14 14.875C14 14.6875 13.8125 14.5 13.625 14.5H13V0.75C13 0.34375 12.6562 0 12.25 0H1.71875C1.3125 0 0.96875 0.34375 0.96875 0.75V14.5H0.375C0.15625 14.5 0 14.6875 0 14.875V16H14V14.875ZM2.46875 14.4688L2.5 1.5L11.5 1.53125V14.4688H8V12.375C8 12.1875 7.8125 12 7.625 12H6.375C6.15625 12 6 12.1875 6 12.375V14.4688H2.46875Z"
                  fill="#666666"
                />
              </svg>
              <span>
                <PRichText field={siteData.address.richText} />
              </span>
            </div>
          )}

          {siteData?.email && (
            <Anchor
              href={`mailto:${siteData.email}`}
              className={styles.footerNavItem}
              underlined
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
              >
                <path
                  d="M14.5 0H1.5C0.65625 0 0 0.6875 0 1.5V10.5C0 11.3438 0.65625 12 1.5 12H14.5C15.3125 12 16 11.3438 16 10.5V1.5C16 0.6875 15.3125 0 14.5 0ZM14.5 1.5V2.78125C13.7812 3.375 12.6562 4.25 10.2812 6.125C9.75 6.53125 8.71875 7.53125 8 7.5C7.25 7.53125 6.21875 6.53125 5.6875 6.125C3.3125 4.25 2.1875 3.375 1.5 2.78125V1.5H14.5ZM1.5 10.5V4.71875C2.1875 5.28125 3.21875 6.09375 4.75 7.3125C5.4375 7.84375 6.65625 9.03125 8 9C9.3125 9.03125 10.5 7.84375 11.2188 7.3125C12.75 6.09375 13.7812 5.28125 14.5 4.71875V10.5H1.5Z"
                  fill="#666666"
                />
              </svg>
              <span>{siteData.email}</span>
            </Anchor>
          )}

          {siteData?.phone_number && (
            <Anchor
              href={`tel:${siteData?.phone_number}`}
              className={styles.footerNavItem}
              underlined
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M15.875 1.71875L12.9375 1.0625C12.25 0.90625 11.5625 1.25 11.3125 1.875L9.9375 5.0625C9.6875 5.625 9.84375 6.3125 10.3438 6.71875L11.5938 7.75C10.7188 9.375 9.34375 10.7188 7.71875 11.625L6.6875 10.375C6.28125 9.875 5.59375 9.71875 5.03125 9.96875L1.84375 11.3125C1.21875 11.5938 0.875 12.2812 1.03125 12.9688L1.6875 15.9062C1.84375 16.5625 2.4375 17 3.09375 17C10.75 17 17 10.8125 17 3.125C17 2.46875 16.5312 1.875 15.875 1.71875ZM3.15625 15.5L2.5 12.6875L5.5625 11.375L7.3125 13.5C10.4062 12.0312 12 10.4375 13.4688 7.34375L11.3438 5.59375L12.6562 2.53125L15.5 3.1875C15.4688 9.96875 9.9375 15.4688 3.15625 15.5Z"
                  fill="#666666"
                />
              </svg>
              <span>{siteData?.phone_number}</span>
            </Anchor>
          )}
        </nav>
      </div>
      <div>
        <div className={styles.footerNavTitle}>
          <Text color="grey" weight="600">
            Explore
          </Text>
        </div>
        {siteData?.footer_navigation && (
          <nav className={styles.footerNavi}>
            {siteData?.footer_navigation?.map(({ nav_link, nav_text }, key) => {
              console.log({ nav_link, nav_text })
              const Component = ({ children, ...props }) => (
                <Anchor className={styles.footerNavItem} {...props}>
                  {children}
                </Anchor>
              )
              return (
                <PrismicLink
                  field={nav_link}
                  externalComponent={Component}
                  internalComponent={Component}
                >
                  <span>{nav_text}</span>
                </PrismicLink>
              )
            })}
          </nav>
        )}
      </div>
    </div>
  )
}

export const Footer = ({ children, ...props }) => {
  const siteData = useSiteMetadata()

  return (
    <footer className={classNames(styles.footer)} {...props}>
      <Spacer y="md">
        <Container size="lg">
          <div className={styles.inner}>
            <div className={styles.logoWrap}>
              <Link to="/">
                <Logo />
              </Link>
              <div className={styles.social}>
                {siteData?.social.map(({ social_link, social_icon }, key) => {
                  const Component = ({ children, ...props }) => (
                    <Anchor {...props}>{children}</Anchor>
                  )
                  return (
                    <PrismicLink
                      key={key}
                      field={social_link}
                      externalComponent={Component}
                      internalComponent={Component}
                    >
                      <SocialIcon icon_type={social_icon} />
                    </PrismicLink>
                  )
                })}
              </div>
            </div>
            <div className={styles.nav}>
              <FooterNav />
            </div>
            <div className={styles.cta}>
              <Banner isMini>
                <Heading variant="h6" color="white">
                  Find out more about Loxone at:
                </Heading>
                <Spacer y="xsm" />
                <Heading variant="h6" color="white">
                  <Anchor href="https://loxone.com" isLight underlined>
                    loxone.com
                  </Anchor>
                </Heading>
              </Banner>
            </div>
          </div>
        </Container>
      </Spacer>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer

import React from "react"
import { Container, Prose } from "@components/atoms"
import { SplitIntro } from "@components/molecules"
import { PRichText } from "@lib/richtext"
import { graphql } from "gatsby"
import { ContactInfoForm } from "@components/molecules/form/ContactInfoForm"
import Spacer from "@components/atoms/spacer"

export const ContactFormSlice = ({ slice }) => {
  const { primary } = slice

  return (
    <Container bg="light-grey">
      <Spacer y="md">
        <Prose align="center">
          {primary?.content && <PRichText field={primary.content.richText} />}
        </Prose>

        <Spacer y="md" />
        <Container size="sm" padding="none">
          <ContactInfoForm />
        </Container>
      </Spacer>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageDataBodyContactForm on PrismicHomepageDataBodyContactForm {
    ...SliceType
    primary {
      content {
        richText
      }
    }
  }

  fragment PageDataBodyContactForm on PrismicPageDataBodyContactForm {
    ...SliceType
    primary {
      content {
        richText
      }
    }
  }
`

export default ContactFormSlice

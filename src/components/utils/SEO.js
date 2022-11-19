import React from "react"
import { useSiteMetadata } from "@lib/hooks/use-site-meta"
import { Helmet } from "react-helmet"

export const SEO = ({ title, description, pathname, children }) => {
  console.log("test")
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata()

  console.log({ defaultTitle })

  const seo = {
    title: title + " | " + defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : "",
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {twitterUsername && (
        <meta name="twitter:creator" content={seo.twitterUsername} />
      )}
      {children}
    </>
  )
}

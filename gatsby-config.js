require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Loxone`,
    description: ``,
    siteUrl: process.env.GATSBY_SITEURL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@use 'variables' as *;`,
        sassOptions: {
          includePaths: [`${__dirname}/src/styles/global`],
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        releaseID: process.env.PRISMIC_RELEASE_ID,
        shouldDownloadFiles: {
          "homepage.data.body.full_hero.primary.hero_image": true,
          "homepage.data.body.feature.primary.image": true,
          "homepage.data.body.feature_slider.items.image": true,
          "homepage.data.body.image_block.primary.image": true,
          "homepage.data.body.video_block.primary.image": true,
          "homepage.data.body.gallery.items.image": true,

          "page.data.body.full_hero.primary.hero_image": true,
          "page.data.body.feature.primary.image": true,
          "page.data.body.feature_slider.items.image": true,
          "page.data.body.image_block.primary.image": true,
          "page.data.body.video_block.primary.image": true,
          "page.data.body.gallery.items.image": true,
        },
        linkResolver: doc =>
          require("./config/prismic/linkResolver").linkResolver(doc),
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          quality: 75,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            allSitePage {
              nodes {
                  path
                  pageContext
              }
            }
          }
          `,
        resolveSiteUrl: () => process.env.GATSBY_SITEURL,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages
            ?.filter(({ pageContext }) => pageContext?.noindex !== true)
            .map(page => {
              return { ...page }
            })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: "daily",
            priority: 0.7,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `loxone`,
        short_name: `loxone`,
        start_url: `/`,
        background_color: `#69c350`,
        title: "Loxone",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#69c350`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`,
      },
    },
  ],
}

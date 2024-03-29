import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: "https://liamdebell.dev",
    title: "Liam Debell",
    icon: "/icon.ico"
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-typescript',
    'gatsby-plugin-svgr',
    {
      resolve: "gatsby-source-custom-api",
      options: {
          rootKey: "GithubParent",
          url: "https://api.github.com/repos/liamdebellada/portfolio-data/contents"
      }
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: 'en'
      }
    }
  ]
}

export default config

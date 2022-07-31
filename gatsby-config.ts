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
    {
      resolve: "gatsby-source-custom-api",
      options: {
          rootKey: "GithubParent",
          url: "https://api.github.com/repos/liamdebellada/portfolio-data/contents"
      }
    }
  ]
}

export default config

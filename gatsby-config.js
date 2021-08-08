module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "liamdebell",
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
};

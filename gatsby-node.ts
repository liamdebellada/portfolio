import 'dotenv/config'

import fetch from 'node-fetch'

import type { GatsbyNode } from 'gatsby'
import type { RequestInit } from 'node-fetch'
import type { GithubContent, RepoItem } from "./github-types"

const GIT_PROJECTS = "https://api.github.com/repos/liamdebellada/portfolio-data/contents/Projects?ref=master"
const GitRequestConfig = {
  headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
}

const githubFetch = (url: string, opts?: RequestInit) => fetch(url, {...GitRequestConfig, ...opts})

const fetchGithubContent = async (githubContent: GithubContent) => {
  try {
    const response = await githubFetch(githubContent.git_url)
    const fileData = await response.json()

    const json_content = Buffer
      .from(fileData.content, "base64")
      .toString()
    const repoItem: RepoItem = JSON.parse(json_content)

    return {
      ...githubContent,
      file_data: {
        ...fileData,
        content: repoItem
      }
    }
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const createResolvers: GatsbyNode["createResolvers"] = async ({ createResolvers }) => {
  createResolvers({
    Query: {
      Projects: {
        type: "[GithubItem!]!",
        async resolve() {
          try {
            const response = await githubFetch(GIT_PROJECTS)
            const githubContents: Array<GithubContent> = await response.json()

            return await Promise.all(githubContents.map(fetchGithubContent))
          } catch (err) {
            console.error(err)
            throw err
          }
        }
      }
    }
  })
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  actions.createTypes(`
    type GithubJson implements Node {
      display_title: String!,
      short_description: String!,
      raw_md: String!,
      repo_url: String,
      display_image: String,
      display_slide: String
    }

    type FileData implements Node {
      sha: String!,
      node_id: String!,
      size: Int!,
      url: String!,
      content: GithubJson!,
      encoding: String!
    }

    type GithubItem implements Node {
      name: String!,
      path: String!,
      sha: String!,
      size: Int!,
      url: String!,
      html_url: String!,
      git_url: String!,
      download_url: String!,
      type: String!,
      file_data: FileData!
    }
  `)
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  loaders,
  actions
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@splidejs/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

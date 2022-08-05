import 'dotenv/config'

import path from "path"
import { Octokit } from "octokit"

import type { GatsbyNode } from 'gatsby'
import type { ProjectItem } from "github-types"
import type { GetResponseTypeFromEndpointMethod } from "@octokit/types"

const { rest: GithubRestApi } = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

type ContentResponse = Extract<
  GetResponseTypeFromEndpointMethod<typeof GithubRestApi.repos.getContent>["data"],
  Record<string, unknown>
>

const fetchAndDecodeGithubContent = async (githubContent: Omit<ContentResponse, 'encoding'>) => {
  const { path } = githubContent

  const { data: fileContent } = await GithubRestApi.repos.getContent({
    owner: 'liamdebellada',
    repo: 'portfolio-data',
    path
  })

  if ("content" in fileContent) {
    const { content } = fileContent

    const json_content = Buffer
      .from(content, "base64")
      .toString()

    return JSON.parse(json_content) as ProjectItem
  }
}

export const createResolvers: GatsbyNode["createResolvers"] = async ({ createResolvers }) => {
  createResolvers({
    Query: {
      Projects: {
        type: "[Project!]!",
        async resolve() {
          try {
            const { data: projects } = await GithubRestApi.repos.getContent({
              owner: 'liamdebellada',
              repo: 'portfolio-data',
              path: 'Projects'
            })

            if (!Array.isArray(projects)) throw new Error('Repository path must be a directory')

            return await Promise.all(projects.map(fetchAndDecodeGithubContent))
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
    type Project implements Node {
      display_title: String!,
      short_description: String!,
      raw_md: String!,
      repo_url: String,
      display_image: String,
      display_slide: String
    }
  `)
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  loaders,
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, 'src/')
      }
    },
  })

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

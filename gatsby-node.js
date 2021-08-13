const fetch = require(`node-fetch`);
const keys = require('./keys.json');
const showdown  = require('showdown')
const path = require(`path`)
const stringReplaceAll = require('string-replace-all');

//endpoints
const GIT_PROJECTS = "https://api.github.com/repos/liamdebellada/portfolio-data/contents/Projects?ref=master";
const GIT_BLOGS = "https://api.github.com/repos/liamdebellada/portfolio-data/contents/Blogs?ref=master";

const config = {
	headers: { Authorization: `token ${keys.github}` }
}

const dataFetch = async (git_items) => {
	return git_items.map(async (item) => {
		let fileData = await fetch(item.git_url, config)
		.then(data => data.json())
		.then(data => {
			let parser = new showdown.Converter();
			let json_content = new Buffer.from(data.content, "base64");
			json_content = json_content.toString();
			let parsed_json = JSON.parse(json_content);

			parsed_json.raw_md = parser.makeHtml(parsed_json.raw_md)
			console.log("replacing")


			let invalid = parsed_json.raw_md.split("\n");

			invalid = invalid.map((s) => {
				s = stringReplaceAll(s, "\n", " ");
				return stringReplaceAll(s, "\\n", " ");
			}).join("")

			parsed_json.raw_md = invalid;


			data.content = parsed_json;
			return data;
		})
		.catch(e => console.error(e));

		item.file_data = fileData;
		return item;
	})
}

exports.createResolvers = async ({ createResolvers, schema }) => {
	createResolvers({
		Query: {
			Projects: {
				type: "[GithubItem!]!",
				async resolve(source, args, context, info) {
					return await fetch(GIT_PROJECTS, config).then(data => data.json()).then(async data => {
						data = await dataFetch(data);
						return data;
					}).catch(e => e);
				}
			},
			Blogs: {
				type: "[GithubItem!]!",
				async resolve(source, args, context, info) {
					return await fetch(GIT_BLOGS, config).then(data => data.json()).then(async data => {
						data = await dataFetch(data);
						return data;
					}).catch(e => e);
				}
			}
		}
	})
}

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `

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
	`
	createTypes(typeDefs)
}

exports.createPages = ({graphql, actions}) => {
	const {createPage} = actions;
	const BlogsComponent = path.resolve('./src/slugs/blogs/blogs.tsx');

	return graphql(`
		query {
			Blogs {
				name
				file_data {
				content {
					display_title
					raw_md
					short_description
				}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			throw result.errors
		}

		result.data.Blogs.forEach((blog) => {
			createPage({
				path: `/blogs/${blog.file_data.content.display_title.replace(" ", "_")}`,
				component: BlogsComponent,
				context: {
					blog: blog
				}
			})

		})
	})
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
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
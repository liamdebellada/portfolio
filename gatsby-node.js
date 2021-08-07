const fetch = require(`node-fetch`);
const keys = require('./keys.json');

exports.createResolvers = async ({ createResolvers, schema }) => {
	createResolvers({
		Query: {
			BlogData: {
				type: "[BlogData!]!",
				async resolve(source, args, context, info) {
					const blogs = context.nodeModel.getAllNodes({
						type: `githubBlogsParent`,
					})

					let blogData = [];
					let config = {
						headers: {Authorization: `token ${keys.github}`}
					}

					for (item in blogs) {
						await fetch(blogs[item].git_url, config).then(data => data.json()).then(data => {
							data.content = new Buffer.from(data.content, "base64");
							data.content = data.content.toString();
							blogData.push(data);
						}).catch((e) => {
							console.log(e)
							return ["failed"]
						})
					}

					return blogData;
				}
			}
		}
	})
}

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `
	  type BlogData implements Node {
		  sha: String!,
		  node_id: String!,
		  size: Int!,
		  url: String!,
		  content: String!,
		  encoding: String!
	  }

	  extend type githubBlogsParent implements Node {
		  test: String
	  }
	`
	createTypes(typeDefs)
}
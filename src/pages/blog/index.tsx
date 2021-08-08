import React from 'react';
import './blog.css';

//components
import Heading from '../../components/heading/heading';
import ReadButton from '../../components/buttons/readButton/readButton';

//lib
import {motion} from 'framer-motion';
import { graphql } from 'gatsby';

const Blog = ({data} : {data: any}) => {
	return (
		<div className="blogParent">
			<div className="blogHeading">
				<Heading options={{text: "Blog"}}/>
				<p className="descriptionText">Here are a series of blogs that I am writing in conjunction with my software development experience.</p>
			</div>

			<div className="blogContent">
				{data.Blogs.map((item: any, i: number) => (
					<motion.div initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{type: "spring", damping: 10, duration: 0.3}} className="blogRow" style={{justifyContent: i % 3 == 1 ? "flex-end" : "flex-start"}}>
						<div className="blogRowContent" >
							<div className="logoContainer">
								<span className="material-icons bookIcon">import_contacts</span>
							</div>
							<div className="infoContainer">
								<div className="titleContainer">
									<Heading options={{text: item.file_data.content.display_title, size: "2rem"}}/>
								</div>
								<div className="buttonsContainer">
									<div className="statsContainer">
										<span className="statText">Words: {item.file_data.content.raw_md.length}</span>
										<span className="statText">Subject: {"Computer Science"}</span>
									</div>
									<div className="buttonContainer">
										<ReadButton options={{url: `/blogs/${item.file_data.content.display_title.replace(" ", "_")}`}}/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				))}

			</div>
		</div>
	)
}

export const query = graphql`
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
`

export default Blog;
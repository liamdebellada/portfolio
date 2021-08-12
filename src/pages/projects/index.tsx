import React from 'react';
import './projects.css';

//components
import Heading from '../../components/heading/heading';
import RepoButton from '../../components/buttons/repoButton/repoButton';

//lib
import {motion} from 'framer-motion';
import { graphql } from 'gatsby';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.35,
		}
	}
}
  
const item_var = {
	hidden: { pathLength: 0 },
	show: { 
		pathLength: 1, 
		transition: {
			duration: 1
		}
	}
}

const node_var = {
	hidden: {	scale: 0 },
	show: {
		scale: 1, 
		transition : {
			duration: 0.2, type: "spring", damping: 9
		}
	}
}

const PathItem = () => {
	return (
		<>
			<motion.div variants={node_var} className="circle"/>
			<svg preserveAspectRatio="none" width="7" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 2 5 60">
				<motion.path 
				d="M 2,2 v 300" 
				height="100%"
				stroke="#939393"
				variants={item_var}
				/>
			</svg>
		</>
	)
}

export default function huh({data} : {data: any}) {

	return (
		<div className="projectsParent">
			<title>Projects</title>
			<div className="projectsHeading">
				<Heading options={{text: "Projects"}}/>
				<p className="descriptionText">
				All of my personal projects are open-source and available to fork, download and contribute to on GitHub. 
				</p>
			</div>
			<motion.div initial="hidden" animate="show" variants={container}>
			{data.Projects.map((item: any, i: number) => (
				<div key={i} className="contentArea">
					<div className="progressArea">
						<PathItem/>
					</div>
					<motion.div className="textArea">
						<Heading options={{text: item.file_data.content.display_title, size: "2rem"}}/>
						<div className="contentInfo">
							<div className="contentInfoText">
								<p className="descriptionText projectDescription">{item.file_data.content.short_description}</p>
								<p className="descriptionText projectDescription">Working with staff at the Royal School of Needlework, I was able to accurately meet client requirements communicating remotely through emails and video calls.</p>
							</div>
							<div className="contentInfoImages">
								<div className="images">
									<img src={item.file_data.content.display_image}/>
								</div>
								<div className="buttons">
									<RepoButton link={item.file_data.content.repo_url as string}/>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			))}
			</motion.div>
		</div>
	)
}

export const query = graphql`
query {
  Projects {
    name
    html_url
    file_data {
      content {
        short_description
        raw_md
        display_title
        repo_url
		display_image
      }
    }
  }
}
`
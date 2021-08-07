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
			staggerChildren: 0.3,
		}
	}
}
  
const item_var = {
	hidden: { pathLength: 0 },
	show: { 
		pathLength: 1, 
		transition: {
			duration: 0.5
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
			<svg width="4" height="300" xmlns="http://www.w3.org/2000/svg">
				<motion.path 
				d="M 2,2 v 300" 
				stroke="#000"
				variants={item_var}
				/>
			</svg>
		</>
	)
}

export default function huh({data}: {data: any}) {
	var {allGithubProjectsParent} = data;
	return (
		<div className="projectsParent">
			<div className="projectsHeading">
				<Heading options={{text: "Projects"}}/>
				<p className="descriptionText">
				All of my personal projects are open-source and available to fork, download and contribute to on GitHub. 
				</p>
			</div>
			<motion.div initial="hidden" animate="show" variants={container}>
			{allGithubProjectsParent.nodes.map((item: any, i: number) => (
				<div key={i} className="contentArea">
					<div className="progressArea">
						<PathItem/>
					</div>
					<motion.div className="textArea">
						<Heading options={{text: item.name, size: "2rem"}}/>
						<div className="contentInfo">
							<div className="contentInfoText">
								<p className="descriptionText">RSN Archive provides a blazing fast image browser for the Royal School of Needlework. The application is written in Rust and Svelte to provide the fastest possible performance available.</p>
								<p className="descriptionText">Working with staff at the Royal School of Needlework, I was able to accurately meet client requirements communicating remotely through emails and video calls.</p>
							</div>
							<div className="contentInfoImages">
								<div className="images">
									<img src="/collections/needles.png"/>
								</div>
								<div className="buttons">
									<RepoButton/>
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
		allGithubProjectsParent {
			nodes {
				name
			}
		}
	}
`
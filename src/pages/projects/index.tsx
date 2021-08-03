import React from 'react';
import './projects.css';

//components
import Heading from '../../components/heading/heading';

//lib
import {motion, useAnimation} from 'framer-motion';

const PathItem = ({startNode}: {startNode?: boolean}) => {

	const animation = useAnimation();

	const handleComplete = () => {
		animation.start({
			scale: 1,
			transition: { duration: 0.2 }
		})
	}

	return (
		<>
		{startNode && (
			<motion.div className="circle"/>
		)}
			<svg width="4" height="300" xmlns="http://www.w3.org/2000/svg">
				<motion.path 
				d="M 2,2 v 300" 
				stroke="#000"
				initial={{pathLength: 0}}
				animate={{pathLength: 1}}
				transition={{duration: 1}}
				onAnimationComplete={handleComplete}
				/>
			</svg>
			<motion.div initial={{scale: 0}} animate={animation} className="circle"/>
		</>
	)
}

export default function huh() {
	return (
		<div className="projectsParent">
			<div className="projectsHeading">
				<Heading options={{text: "Projects"}}/>
				<p className="descriptionText">
				All of my personal projects are open-source and available to fork, download and contribute to on GitHub. 
				</p>
			</div>
			<div className="contentArea">
				<div className="progressArea">
					{[1,2,3,4].map((_, i) => (
						<PathItem startNode={i == 0 ? true : false } />
					))}
				</div>
				<div className="textArea">
					content
				</div>
			</div>
		</div>
	)
}
import React from 'react';
import './projects.css';

//components
import Heading from '../../components/heading/heading';

//lib
import {motion, useAnimation} from 'framer-motion';
const container = {
	hidden: { opacity: 0 },
	show: {
	  opacity: 1,
	  transition: {
		staggerChildren: 0.5,
	  }
	}
  }
  
  const item_var = {
	hidden: { pathLength: 0 },
	show: { pathLength: 1, transition: {
		duration: 1
	}}
  }

const PathItem = ({index} : {index: number}) => {
	const animation = useAnimation();
	const handleComplete = () => {
		console.log("complete")
		animation.start({
			scale: 1,
			transition: { duration: 0.3, type: "spring", damping: 9, delay: -1, when: "beforeChildren"}
		})
	}

	return (
		<>
			<motion.div initial={{scale: index == 0 ? 1 : 0}} animate={animation} className="circle"/>
			<svg width="4" height="300" xmlns="http://www.w3.org/2000/svg">
				<motion.path 
				d="M 2,2 v 300" 
				stroke="#000"
				variants={item_var}
				onAnimationComplete={handleComplete}
				/>
			</svg>
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
			<motion.div initial="hidden" animate="show" variants={container}>
			{[1,2,3,4].map((item, i) => (
				<div className="contentArea">
					<div className="progressArea">
						<PathItem index={i}/>
					</div>
					<motion.div className="textArea">
						<Heading options={{text: "RSN Archive", size: "2rem"}}/>
						<div className="contentInfo">
							<div className="contentInfoText">
								<p className="descriptionText">RSN Archive provides a blazing fast image browser for the Royal School of Needlework. The application is written in Rust and Svelte to provide the fastest possible performance available.</p>
								<p className="descriptionText">Working with staff at the Royal School of Needlework, I was able to accurately meet client requirements communicating remotely through emails and video calls.</p>
							</div>
							<div className="contentInfoImages">
								<div className="images">
									<img src="/screens/needles.png"/>
								</div>
								<div className="buttons">

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
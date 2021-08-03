import React from 'react';
import './projects.css';

//components
import Heading from '../../components/heading/heading';

//lib
import {motion, useAnimation} from 'framer-motion';

const PathItem = ({index} : {index: number}) => {
	const animation = useAnimation();
	const handleComplete = () => {
		animation.start({
			scale: 1,
			transition: { duration: 0.3, type: "spring", damping: 9}
		})
	}

	return (
		<>
			<motion.div initial={{scale: index == 0 ? 1 : 0}} animate={animation} className="circle"/>
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

			{[1,2].map((item, i) => (
				<div className="contentArea">
					<div className="progressArea">
						<PathItem index={i}/>
					</div>
					<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} className="textArea">
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
		</div>
	)
}
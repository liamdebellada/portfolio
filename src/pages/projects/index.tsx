import React from 'react';
import './projects.css';

//components
import Heading from '../../components/heading/heading';

//lib
import {motion} from 'framer-motion';

export default function huh() {
	return (
		<div className="projectsParent">
			<div className="projectsHeading">
				<Heading options={{text: "Projects"}}/>
				<p className="descriptionText">
				All of my personal projects are open-source and available to fork, download and contribute to on GitHub. 
				</p>
			</div>
		</div>
	)
}
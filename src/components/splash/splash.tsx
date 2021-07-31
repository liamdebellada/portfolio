import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

import './splash.css';

const SplashScreen = () => {
	return (
		<AnimatePresence>
				<motion.div 
				key="test"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 1}}
				className="splashParent"
				layoutId="header"
				>
					<motion.img layoutId="logo" src="/liam.svg"/>
				</motion.div>
		</AnimatePresence>
	)
}

export default SplashScreen;
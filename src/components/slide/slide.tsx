import React from 'react';
import './slide.css';

//lib
import {motion} from 'framer-motion';

const Slide = () => {
	return (
		<motion.div className="slideParent" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0.2}}>
			<span className="titleText">RSN</span>
		</motion.div>
	)
}

export default Slide;
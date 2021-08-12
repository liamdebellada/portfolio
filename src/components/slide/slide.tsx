import React from 'react';
import './slide.css';

//lib
import {motion} from 'framer-motion';

const Slide = ({item} : any) => {
	return (
		<motion.div style={{backgroundImage: `url(${item.file_data.content.display_image})`}} className="slideParent" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 0.2}}>
			<span className="titleText">{item.file_data.content.display_title}</span>
		</motion.div>
	)
}

export default Slide;
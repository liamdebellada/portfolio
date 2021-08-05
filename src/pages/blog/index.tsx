import React from 'react';
import './blog.css';

//components
import Heading from '../../components/heading/heading';
import ReadButton from '../../components/buttons/readButton/readButton';

//lib
import {motion} from 'framer-motion';

const Blog = () => {
	return (
		<div className="blogParent">
			<div className="blogHeading">
				<Heading options={{text: "Blog"}}/>
				<p className="descriptionText">Here are a series of blogs that I am writing in conjunction with my software development experience.</p>
			</div>

			<div className="blogContent">
				{[1,2,3].map((item, i) => (
					<motion.div initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{type: "spring", damping: 10, duration: 0.3}} className="blogRow" style={{justifyContent: i % 3 == 1 ? "flex-end" : "flex-start"}}>
						<div className="blogRowContent" >
							<div className="logoContainer">
								<span className="material-icons bookIcon">import_contacts</span>
							</div>
							<div className="infoContainer">
								<div className="titleContainer">
									<Heading options={{text: "Substituting conventional file systems for database equivalents.", size: "2rem"}}/>
								</div>
								<div className="buttonsContainer">
									<div className="statsContainer">
										<span className="statText">Words: {123}</span>
										<span className="statText">Subject: {"Computer Science"}</span>
									</div>
									<div className="buttonContainer">
										<ReadButton/>
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

export default Blog;
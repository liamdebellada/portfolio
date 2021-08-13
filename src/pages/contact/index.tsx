import React from 'react';
import './contact.css';

//components
import Heading from '../../components/heading/heading';
import { navigate } from 'gatsby';
import { motion } from 'framer-motion';

//configs
const techStack = [
	{icon: '/Gatsby.svg'},
	{icon: '/Typescript.svg'},
	{icon: '/React.svg'},
	{icon: '/Github.svg'},
]

const socials = [
	{icon: "/Github.svg", url: "https://github.com/liamdebellada"},
	{icon: "/Linkedin.svg", url: "https://www.linkedin.com/in/liam-debell-39b5461a3/"},
	{icon: "/Email.svg", url: "mailto:liamdebell11@gmail.com"}
]

const Contact = () => {
	return (
		<div className="contactParent">
			<title>Contact</title>
			<div className="contactListParent">
				<Heading options={{text: "Contact"}}/>
				<p className="descriptionText">You can checkout what I’m working on or get in contact with me through these channels: </p>
				<div className="socialListParent">
					{socials.map((social) => (
						<motion.div 
						initial={{paddingLeft: 0}} 
						whileHover={{paddingLeft: "5rem"}} 
						transition={{type: "spring", damping: 12, duration: 0.3}} 
						className="socialItem noselect" 
						onClick={() => !social.url.includes("mailto:") ? navigate(social.url) : undefined}
						>
							<img src={social.icon}/>
							{social.url.includes("mailto:") ? (
								<a href={social.url} className="emailOption">{social.icon.split("/")[1].replace(".svg", "")}</a>
							) : (
								<span>{social.icon.split("/")[1].replace(".svg", "")}</span>
							)}
						</motion.div>
					))}
				</div>
			</div>
			<div className="aboutParent">
				<Heading options={{text: "About"}}/>
				<p className="descriptionText">You can checkout what I’m working on or get in contact with me through the above channels: The source-code for my portfolio is available here: {<span style={{fontWeight: 800, cursor: "pointer", textDecoration: "underline"}} onClick={() => navigate("https://github.com/liamdebellada/portfolio")}>Click Me</span>}, written in TypeScript using Gatsby, with React used for animations and rendering!</p>
				<div className="techStackList">
					{techStack.map((item) => (
						<img className="techStackItem" src={item.icon}/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Contact;
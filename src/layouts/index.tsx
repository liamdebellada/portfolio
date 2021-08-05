import * as React from "react";
import '../styles/global.css';
import './layout.css';

import Bar from '../components/nav/nav';
import Splash from '../components/splash/splash';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const layout = ({children, path, location} : {children: React.ReactNode, path: string, location: any})=> {
	const [isLoading, setLoading] = React.useState(path == "/" ? true : false);

	if (path == "/") {
		setTimeout(() => setLoading(false), 1000);
	}

	const hiddenBackground = {backgroundPositionX: "calc(200% + 0px)", backgroundPositionY: "calc(200% + 0px)"}

	return (
		<AnimateSharedLayout type="crossfade">
			{isLoading ? (
				<Splash/>
			) : (
			<AnimatePresence>
				<motion.div 
				key="stripes"
				exit={hiddenBackground} 
				initial={hiddenBackground}
				animate={{backgroundPositionX: "calc(100% + 150px)", backgroundPositionY: "calc(100% + 200px)"}}
				transition={{duration: 0.5, type: "spring", stiffness: 60, damping: 12}}
				className="parent">
					<div className="navContainer">
						<Bar options={[
							{name: "home", icon: "home", route: "/"},
							{name: "projects", icon: "integration_instructions", route: "/projects/"},
							{name: "blog", icon: "import_contacts", route: "/blog/"},
							{name: "contact", icon: "account_box", route: "/contact/"},
						]} path={path}/>
					</div>
					<div className="contentContainer">
						<motion.div onLayoutAnimationComplete={() => console.log("ended")} layoutId="header" className="logoHeading">
							<motion.img layoutId="logo" src="/liam.svg"/>
						</motion.div>
						<div className="contentParent">
							{children}
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
			)}
		</AnimateSharedLayout>
	)

}

export default layout
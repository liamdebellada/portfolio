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

	const spring = {
		type: "spring",
		stiffness: 500,
		damping: 30,
	};
	  

	return (
		<AnimateSharedLayout type="crossfade">
			{isLoading ? (
				<Splash loading={isLoading}/>
			) : (
			<div className="parent">
				<div className="navContainer">
					<Bar options={[
						{name: "home", icon: "home", route: "/"},
						{name: "projects", icon: "integration_instructions", route: "projects"},
						{name: "blog", icon: "import_contacts", route: "blog"},
						{name: "stats", icon: "insert_chart_outlined", route: "stats"},
					]}/>
				</div>
				<div className="contentContainer">
					<motion.div layoutId="header" className="logoHeading">
						<motion.img layoutId="logo" src="/liam.svg"/>
					</motion.div>
					{children}
				</div>
			</div>
			)}
		</AnimateSharedLayout>
	)

}

export default layout
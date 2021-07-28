import * as React from "react";
import '../styles/global.css';
import './layout.css';

import Bar from '../components/nav/nav';

const layout = ({children} : {children: React.ReactNode})=> {
	return (
		<div className="parent">
			<div className="navContainer">
				<Bar options={[
					{name: "home", icon: "home", route: "/"},
					{name: "projects", icon: "integration_instructions", route: "projects"},
					{name: "blog", icon: "import_contacts", route: "blog"},
					{name: "stats", icon: "insert_chart_outlined", route: "stats"},
				]}/>
			</div>
			<div className="contentContainer">{children}</div>
		</div>
	)
}

export default layout
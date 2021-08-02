import React from 'react';
import './nav.css';

import {navigate} from 'gatsby';

interface Options {
	icon: string,
	name: string,
	route: string
}

const Bar = ({options, path}: {options: Options[], path: string}) => {
	return (
		<div className="barParent">
			{options.map((option, i) => (
				<div key={i} className="navItem noselect">
					<span 
						onClick={() => navigate(option.route)} 
						className={option.route == path ? "navItemActive material-icons" : "material-icons"}
						>
							{option.icon}
					</span>
				</div>
			))}
		</div>
	)
}

export default Bar
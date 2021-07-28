import React from 'react';
import './nav.css';

import {navigate} from 'gatsby';

interface Options {
	icon: string,
	name: string,
	route: string
}

const Bar = ({options}: {options: Options[]}) => {
	return (
		<div className="barParent">
			{options.map((option) => (
				<div className="navItem">
					<span 
						onClick={() => navigate(option.route.includes("/") ? option.route : `/${option.route}`)} 
						className="material-icons"
						>
							{option.icon}
					</span>
				</div>
			))}
		</div>
	)
}

export default Bar
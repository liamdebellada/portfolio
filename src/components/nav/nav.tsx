import React from 'react';
import './nav.css';

import {navigate} from 'gatsby';
import {motion} from 'framer-motion';

interface Options {
	icon: string,
	name: string,
	route: string
}

const ItemList = ({options, path} : {options: Options[], path: string}) => {
	return (
		<>
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
		</>
	)
}

const Bar = ({options, path}: {options: Options[], path: string}) => {

	const [size, setSize] = React.useState<number[] | null[]>([null, null]);

	const [expanded, setExpanded] = React.useState(false);

	React.useEffect(() => {
		
		setSize([window.innerWidth, window.innerHeight])

		window.addEventListener('resize', (e) => {
			setSize([window.innerWidth, window.innerHeight])
		})
	}, [])

	React.useEffect(() => {
		console.log(expanded)
	}, [expanded]);

	return (
		<motion.div className={size[0] != null && size[0] > 600 ? "barParent fullSize" : "barParent smallSize" + (expanded ? " expandedNav" : "")} onClick={() => size[0] != null && size[0] > 600 ? undefined : setExpanded(expanded ? false : true) }>
			{size[0] != null && size [0] > 600 ? (
				<ItemList options={options} path={path}/>
			): expanded ? (
				<ItemList options={options} path={path}/>
			) : (
				<span className="material-icons noselect">menu</span>
			)}
		</motion.div>
	)
}

export default Bar
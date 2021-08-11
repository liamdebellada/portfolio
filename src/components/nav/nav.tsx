import React from 'react';
import './nav.css';

import {navigate} from 'gatsby';
import {animate, motion, useAnimation} from 'framer-motion';

interface Options {
	icon: string,
	name: string,
	route: string
}

interface BarState {
	current: boolean,
	animFinish: boolean
}

const ItemList = ({options, path} : {options: Options[], path: string}) => {
	return (
		<>
			{options.map((option, i) => (
				<motion.div initial={{opacity: 0}} animate={{opacity: 1}} key={i} className="navItem noselect">
					<span 
						onClick={() => navigate(option.route)} 
						className={option.route == path ? "navItemActive material-icons" : "material-icons"}
						>
							{option.icon}
					</span>
				</motion.div>
			))}
		</>
	)
}

const Bar = ({options, path}: {options: Options[], path: string}) => {

	const [size, setSize] = React.useState<number[] | null[]>([null, null]);
	const [expanded, setExpanded] = React.useState<BarState>({current: false, animFinish: true});

	const animation = useAnimation();

	const handleExpand = (state: BarState) => {
		if (state.current == false) {
			animation.start({
				height: "12rem",
				position: "absolute",
				transition: {duration: 0.2}
			})
		} else {
			animation.start({
				height: "3rem",
				position: "absolute",
				transition: {duration: 0.2}
			})
		}

		setExpanded({
			current: state.current ? false : true,
			animFinish: false
		})
	}
	

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
		<motion.div onAnimationComplete={() => setExpanded({current: expanded.current, animFinish: true})} animate={animation} className={size[0] != null && size[0] > 600 ? "barParent fullSize" : "barParent smallSize" + (expanded ? " expandedNav" : "")} onClick={() => size[0] != null && size[0] > 600 ? undefined : handleExpand(expanded) }>
			{size[0] != null && size [0] > 600 ? (
				<ItemList options={options} path={path}/>
			): expanded.current && expanded.animFinish ? (
					<ItemList options={options} path={path}/>
			) : (
				<span className="material-icons noselect">menu</span>
			)}
		</motion.div>
	)
}

export default Bar
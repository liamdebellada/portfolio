import React from 'react';
import {motion} from 'framer-motion';
import './screenDeck.css';

interface DeckOptions {
	image: string
}

const ScreenDeck = ({options} : {options: DeckOptions[]}) => {
	const rotationAngle = 30;

	return (
		<div className="deckParent">
			{options.map((item, i) => {
				let imageUrl = item.image;
				if (i > 0) {
					let cssRotate = i % 3 == 1 ? `${rotationAngle}deg` : `-${rotationAngle}deg`;
					console.log(cssRotate)
					let cssLr = i % 3 == 1 ? "right" : "left";
					return (
						<motion.div 
						initial={{rotate: "0deg", [cssLr]: "14rem"}}
						transition={{delay: 0.1, duration: 0.1, type: "spring", stiffness: 60}}
						animate={{rotate: cssRotate, [cssLr] : "8rem"}}
						key={i}
						className="deckItem deckRotate"
						style={{transform: `rotate(${cssRotate})`}}
						>
							<img className="screenItem" src={imageUrl}/>
						</motion.div>
					)
				} else {
					return (
						<div key={i} className="deckItem deckCenter">
							<img className="screenItem" src={imageUrl}/>
						</div>
					)
				}
			})}
		</div>
	)
}

export default ScreenDeck;
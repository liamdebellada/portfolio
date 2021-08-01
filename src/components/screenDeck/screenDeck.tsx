import React from 'react';
import './screenDeck.css';

const ScreenDeck = () => {

	const rotationAngle = 30;

	return (
		<div className="deckParent">
			{[1,2,3].map((item, i) => {
				if (i > 0) {
					let cssRotate = i % 3 == 1 ? `${rotationAngle}deg` : `-${rotationAngle}deg`;
					console.log(cssRotate)
					let cssLr = i % 3 == 1 ? "right" : "left";
					return (
						<div key={i} className="deckItem deckRotate" style={{transform: `rotate(${cssRotate})`, [cssLr] : "8rem"}}>
							<img className="screenItem" src="/screens/needles.png"/>
						</div>
					)
				} else {
					return (
						<div key={i} className="deckItem deckCenter">
							<img className="screenItem" src="/screens/needles.png"/>
						</div>
					)
				}
			})}
		</div>
	)
}

export default ScreenDeck;
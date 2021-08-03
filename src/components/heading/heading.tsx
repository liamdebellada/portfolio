import React from 'react';
import './heading.css';

interface HeadingOptions {
	text: string,
	size?: string
}

const Heading = ({options} : {options: HeadingOptions}) => {
	return (
		<div style={{fontSize: options.size || "3rem", height: options.size}} className="heading">
			{options.text}
		</div>
	)
}

export default Heading;
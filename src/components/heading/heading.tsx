import React from 'react';
import './heading.css';

interface HeadingOptions {
	text: string
}

const Heading = ({options} : {options: HeadingOptions}) => {
	return (
		<div className="heading">
			{options.text}
		</div>
	)
}

export default Heading;
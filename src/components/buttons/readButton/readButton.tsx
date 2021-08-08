import { navigate } from 'gatsby';
import React from 'react';
import './readButton.css';

interface Options {
	url: string
}

const ReadButton = ({options} : {options: Options}) => {
	return (
		<button onClick={() => navigate(options.url)} className="readBtn">
			Read
		</button>
	)
}

export default ReadButton;
import { navigate } from 'gatsby';
import React from 'react';
import './repoButton.css';

const RepoButton = ({link}: any) => {
	return (
		<button onClick={() => navigate(link)} className="btn">view repository</button>
	)
}

export default RepoButton;
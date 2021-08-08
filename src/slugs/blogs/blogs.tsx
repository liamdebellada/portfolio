import React from 'react';
import './blogs.css';

const Blogs = (props: any) => {
	console.log(props)
	return (
		<div className="blogContent" dangerouslySetInnerHTML={{__html: props.pageContext.blog.file_data.content.raw_md}}/>
	)
}

export default Blogs;
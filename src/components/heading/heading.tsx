import React from 'react'

import type { FunctionComponent } from 'react'

import './heading.css'

type HeadingProps = {
	text: string,
	options?: {
		size: string
	}
}

const Heading: FunctionComponent<HeadingProps> = ({ text, options }) => (
  <div style={options && {fontSize: options.size || "3rem", height: options.size}} className="heading">
    {text}
  </div>
)

export default Heading

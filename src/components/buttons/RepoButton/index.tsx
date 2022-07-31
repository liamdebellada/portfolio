import React from 'react'
import { navigate } from 'gatsby'

import type { FunctionComponent } from "react"

import './repoButton.css'

type RepoButtonProps = {
	link: string
}

const RepoButton: FunctionComponent<RepoButtonProps> = ({ link }) => {
  return (
    <button onClick={() => navigate(link)} className="btn">view repository</button>
  )
}

export default RepoButton

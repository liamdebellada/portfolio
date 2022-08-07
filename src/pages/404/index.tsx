import React from 'react'
import { navigate } from "gatsby"

import Heading from "~/components/heading/heading"

import './404.css'

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <Heading text="404" options={{size: "2rem"}} />
      <Heading text="Page not found" />
      <button className="homeButton" onClick={() => navigate('/')}>Go home</button>
    </div>
  )
}

export default NotFoundPage

import React from "react"

import { motion } from 'framer-motion'
import { graphql } from 'gatsby'

import { Splide, SplideSlide } from '@splidejs/react-splide'

import Heading from '~/components/heading/heading'
import ScreenDeck from '~/components/screenDeck/screenDeck'
import Slide from '~/components/slide/slide'

import type { FunctionComponent } from 'react'
import type { PageProps } from 'gatsby'
import type { ProjectItem } from "github-types"

import './index.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import buildMetaTags from "~/seo/buildMetaTags"

type HomeProps = PageProps<{
    Projects: Array<ProjectItem>
}>

const ScreenDeckImages = [
  "/screens/colony.png",
  "/screens/portfolio.png",
  "/screens/needles.png"
]

const Home: FunctionComponent<HomeProps> = ({ data }) => {
  const { Projects } = data
  return (
    <div className="homeParent">
      <title>Home</title>

      <div className="homeTop">
        <Heading text="Bio" />
        <div className="bioContent">
          <div className="descriptionSection">
            <p className="bioDescription">
            I’m Liam. I have a passion for the art of software development, and love writing both back-end and front-end code, with an emphasis on speed.
            </p>
            <p className="bioDescription">
            I’m 18 Years old, and currently live in the United Kingdom. I enjoy running and the small things in life.
            </p>
          </div>

          <div className="imageSection">
            <div className="faces">
              <div className="face">
                <img className="primaryFace" src="/face1.png" alt="primary-face"/>
              </div>
              <motion.div className="face" initial={{x: "-14rem"}} transition={{delay: 0.1}} animate={{x: -50}}>
                <img className="primaryFace secondaryFace" src="/face2.png" alt="secondary-face"/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="homeBottom">
        <div className="workingImage">
          <ScreenDeck deckItems={ScreenDeckImages}/>
          <div className="splideList">
            <Splide
              options={{
                arrows: false,
                pagination: false,
                autoWidth: true,
                autoHeight: true,
                height: "9rem",
                gap: "20px",
                fixedWidth: "5rem"
              }}
            >
              {Projects.map((project, i) => (
                <SplideSlide key={i}>
                  <Slide item={project}/>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>

        <div className="workingText">
          <Heading text="What I've been working on?" />
          <p className="bioDescription">My latest projects have all been open-source from conception to completion, with focus on the user experience and functionality.</p>
        </div>
      </div>
    </div>
  )
}


export const query = graphql`
query {
  Projects {
    display_title
    display_slide
  }
}
`

export const Head = buildMetaTags({
  description: 'I’m Liam. I have a passion for the art of software development, and love writing both back-end and front-end code, with an emphasis on speed.'
})

export default Home

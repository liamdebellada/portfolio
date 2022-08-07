import React, {useEffect} from 'react'

import { motion } from 'framer-motion'
import { graphql } from 'gatsby'

import buildMetaTags from "~/seo/buildMetaTags"

import Heading from '~/components/heading/heading'
import RepoButton from '~/components/buttons/RepoButton'

import { useIsMounted } from "usehooks-ts"

import type { FunctionComponent } from "react"
import type { PageProps } from "gatsby"
import type { ProjectItem } from "github-types"

import './projects.css'

const AnimationVariants = {
  projects: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      }
    }
  },
  svgLine: {
    hidden: { pathLength: 0 },
    show: {
      pathLength: 1,
      transition: {
        duration: 1
      }
    }
  },
  circle: {
    hidden: {	scale: 0 },
    show: {
      scale: 1,
      transition : {
        duration: 0.2, type: "spring", damping: 9
      }
    }
  }
}

type ProjectsProps = PageProps<
    {
      Projects: Array<ProjectItem>
    },
    object,
    { clicked: string }
    >

type ProjectProps = ProjectItem & {
  isLastProject: boolean
}

const NodeTree = ({ isLastNode }: { isLastNode: boolean }) => {
  return (
    <>
      <motion.div variants={AnimationVariants.circle} className="circle"/>
      {!isLastNode && (
        <svg preserveAspectRatio="none" width="7" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 2 5 60">
          <motion.path
            d="M 2,2 v 300"
            height="100%"
            stroke="#939393"
            variants={AnimationVariants.svgLine}
          />
        </svg>
      )}
    </>
  )
}

const Project: FunctionComponent<ProjectProps> = ({ display_image, display_title, short_description, repo_url, isLastProject }) => (
  <div id={display_title} className="contentArea">
    <div className="progressArea">
      <NodeTree isLastNode={isLastProject} />
    </div>
    <motion.div className="textArea">
      <Heading text={display_title} options={{size: "2rem"}} />
      <div className="contentInfo">
        <div className="contentInfoText">
          <p className="descriptionText projectDescription">{short_description}</p>
        </div>
        <div className="contentInfoImages">
          <div className="images">
            <img src={display_image} alt="project-screenshot" />
          </div>
          <div className="buttons">
            <RepoButton link={repo_url} />
          </div>
        </div>
      </div>
    </motion.div>
  </div>
)

const Projects: FunctionComponent<ProjectsProps> = ({data, location}) => {
  const { Projects } = data

  const isMounted = useIsMounted()

  useEffect(() => {
    if (isMounted() && location.state.clicked) {
      const clickedProject = document.getElementById(location.state.clicked)
      if (clickedProject) clickedProject.scrollIntoView()
    }
  }, [isMounted])

  return (
    <div className="projectsParent">
      <title>Projects</title>
      <div className="projectsHeading">
        <Heading text="Projects" />
        <p className="descriptionText">
          All of my personal projects are open-source and available to fork, download and contribute to on GitHub.
        </p>
      </div>
      <motion.div initial="hidden" animate="show" variants={AnimationVariants.projects}>
        {Projects.map((item, i) => (
          <Project
            key={i}
            isLastProject={i === Projects.length - 1}
            {...item}
          />
        ))}
      </motion.div>
    </div>
  )
}

export const query = graphql`
query {
  Projects {
    short_description
    raw_md
    display_title
    repo_url
    display_image
  }
}
`

export const Head = buildMetaTags({
  description: "A summary of some of Liam Debell's personal projects."
})

export default Projects

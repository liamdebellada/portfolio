import React from 'react'

import { motion } from 'framer-motion'
import { navigate } from 'gatsby'

import type { FunctionComponent } from 'react'
import type { RepoItem } from "../../../github-types"

import './slide.css'

type SlideProps = {
	item: {
		file_data: {
			content: RepoItem
		}
	}
}

const Slide: FunctionComponent<SlideProps> = ({item}) => {

  const onClick = () => navigate("/projects",
    {
      "state" : {
        clicked : item.file_data.content.display_title
      }
    }
  )

  return (
    <motion.div
      className="slideParent"
      onClick={onClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.2}}
    >
      <img className="slideImage" src={item.file_data.content.display_slide} alt="test" />
      <div className="titleText">{item.file_data.content.display_title}</div>
    </motion.div>
  )
}

export default Slide

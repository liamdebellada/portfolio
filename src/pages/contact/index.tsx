import React from 'react'
import { motion } from 'framer-motion'

import Heading from '~/components/heading/heading'

import type { FunctionComponent } from "react"

import './contact.css'

const PROJECT_URL = 'https://github.com/liamdebellada/portfolio'

const PortfolioTechStack = [
  '/Gatsby.svg',
  '/Typescript.svg',
  '/React.svg',
  '/Github.svg'
]

const ContactMediums = [
  {
    title: 'Github',
    icon: "/Github.svg",
    url: "https://github.com/liamdebellada"
  },
  {
    title: 'Linkedin',
    icon: "/Linkedin.svg",
    url: "https://www.linkedin.com/in/liam-debell-39b5461a3/"
  },
  {
    title: 'Email',
    icon: "/Email.svg",
    url: "mailto:liamdebell11@gmail.com"
  }
]

const Contact: FunctionComponent = () => {
  return (
    <div className="contactParent">
      <title>Contact</title>
      <div className="contactListParent">
        <Heading text="Contact" />
        <p className="descriptionText">You can checkout what I’m working on or get in contact with me through these channels:</p>
        <div className="socialListParent">
          {ContactMediums.map((social, i) => (
            <a key={i} href={social.url}>
              <motion.div
                initial={{paddingLeft: 0}}
                whileHover={{paddingLeft: "0.5rem"}}
                transition={{type: "spring", damping: 12, duration: 0.3}}
                className="socialItem noselect"
              >
                <img src={social.icon} alt={social.title}/>
                <div>{social.title}</div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
      <div className="aboutParent">
        <Heading text="About" />
        <p className="descriptionText">The source-code for my portfolio is available {<a href={PROJECT_URL} className="sourceCodeLink">here</a>}, written in TypeScript using Gatsby, with React used for animations and rendering!</p>
        <div className="techStackList">
          {PortfolioTechStack.map((imageSrc, i) => (
            <img
              key={i}
              className="techStackItem"
              src={imageSrc}
              alt="tech-stack-item"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact

import * as React from "react"
import './index.css';

//lib
import {motion} from 'framer-motion';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

//components
import Heading from '../components/heading/heading';
import ScreenDeck from '../components/screenDeck/screenDeck';
import Slide from '../components/slide/slide';

const app = () => {

  if (typeof window === "undefined") {
    return <p>Server Render</p>
  }

  return (
    <div className="homeParent">
      <title>Home</title>
      <div className="homeTop">
        <Heading options={{text: "Bio"}}/>
        <div className="bioContent">
          <div className="descriptionSection">
            <p className="bioDescription">
            I’m Liam. I have a passion for the art of software development, and love writing both backend and front-end code, with an emphasis on speed.
            </p>
            <p className="bioDescription">
            I’m 18 Years old, and currenlty live in the United Kingdom. I enjoy running and the small things in life.
            </p>
          </div>
          <div className="imageSection">
            <div className="faces">
              <div className="face">
                <img className="primaryFace" src="/face1.jpeg"/>
              </div>
              <motion.div initial={{left: 0}} transition={{delay: 0.1}} animate={{x: -60}} className="face">
                <img className="primaryFace secondaryFace" src="/face2.png"/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeBottom">
        <div className="workingImage">
          <ScreenDeck options={
            [
              {image: "/screens/colony.png"},
              {image: "/screens/mink.png"},
              {image: "/screens/needles.png"}
            ]
          }/>
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
              {[1,2,3].map((i) => (
              <SplideSlide key={i}>
                <Slide/>
              </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <div className="workingText">
          <Heading options={{text: "What I've been working on?"}}/>
          <p className="bioDescription">My latest projects have all been open-source from conception to completion, with focus on the user experience and functionality.</p>
        </div>
      </div>
    </div>
  )
}

export default app;
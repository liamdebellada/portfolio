import * as React from "react"
import './index.css';

//lib
import {motion} from 'framer-motion';
import {graphql} from 'gatsby';

//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

//components
import Heading from '../components/heading/heading';
import ScreenDeck from '../components/screenDeck/screenDeck';
import Slide from '../components/slide/slide';

const app = ({data} : {data: any}) => {
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
              <motion.div initial={{x: "-14rem"}} transition={{delay: 0.1}} animate={{x: -50}} className="face">
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
                {data.Projects.map((item: any, i: number) => (
                <SplideSlide key={i}>
                  <Slide item={item}/>
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


export const query = graphql`
query {
  Projects {
    name
    html_url
    file_data {
      content {
        short_description
        raw_md
        display_title
        repo_url
		display_image
    display_slide
      }
    }
  }
}
`

export default app;
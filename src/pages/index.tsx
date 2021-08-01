import * as React from "react"
import './index.css';

//components
import Heading from '../components/heading/heading';
import ScreenDeck from '../components/screenDeck/screenDeck';

const app = () => {
  return (
    <div className="homeParent">
      <div className="homeTop">
        <Heading options={{text: "Bio"}}/>
        <div className="bioContent">
          <div className="descriptionSection">
            <p className="bioDescription">
            I’m Liam. I have a passion for the art of software development, and love writing both backend and front-end code, with an emphasis on speed.
            </p>
            <p className="bioDescription">
            I’m Liam. I have a passion for the art of software development, and love writing both backend and front-end code, with an emphasis on speed.
            </p>
          </div>
          <div className="imageSection">
            <div className="faces">
              <div className="face">
                <img className="primaryFace" src="/face1.jpeg"/>
              </div>
              <div className="face">
                <img className="primaryFace secondaryFace" src="/face2.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeBottom">
        <div className="workingImage">
          <ScreenDeck/>
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
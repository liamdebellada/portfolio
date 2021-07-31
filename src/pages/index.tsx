import * as React from "react"
import './index.css';

//components
import Heading from '../components/heading/heading';

const app = () => {
  return (
    <div className="homeParent">
      <div className="homeTop">
        <Heading options={{text: "Bio"}}/>
      </div>
      <div className="homeBottom">

      </div>
    </div>
  )
}

export default app;
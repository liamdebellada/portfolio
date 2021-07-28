import {navigate} from 'gatsby';
import * as React from "react"

const app = () => {
  return (
    <div onClick={() => navigate('huh')}>
      home
    </div>
  )
}

export default app;
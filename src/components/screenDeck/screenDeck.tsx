import React from 'react'
import { motion } from 'framer-motion'

import type { FunctionComponent } from "react"

import './screenDeck.css'

const ROTATION_ANGLE = 30

type ScreenDeckProps = {
    deckItems: Array<string>
}

const ScreenDeck: FunctionComponent<ScreenDeckProps> = ({ deckItems }) => (
  <div className="deckParent">
    {deckItems.map((imageUrl, i) => {
      if (i > 0) {
        const cssRotate = i % 3 == 1 ? `${ROTATION_ANGLE}deg` : `-${ROTATION_ANGLE}deg`
        const cssLr = i % 3 == 1 ? "right" : "left"
        return (
          <motion.div
            initial={{rotate: "0deg", [cssLr]: "14rem"}}
            transition={{delay: 0.1, duration: 0.1, type: "spring", stiffness: 60}}
            animate={{rotate: cssRotate, [cssLr]: "8rem"}}
            key={i}
            className="deckItem deckRotate"
            style={{transform: `rotate(${cssRotate})`}}
          >
            <img className="screenItem" src={imageUrl} alt="screen-item" />
          </motion.div>
        )
      } else {
        return (
          <div key={i} className="deckItem deckCenter">
            <img className="screenItem" src={imageUrl} alt="screen-item" />
          </div>
        )
      }
    })}
  </div>
)

export default ScreenDeck

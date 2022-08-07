import React, { useState } from "react"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { useWindowSize, useTimeout } from "usehooks-ts"

import Bar from '~/components/nav/nav'
import Splash from '~/components/splash/splash'

import { IconNames } from "~/components/Icon"
import type { FunctionComponent, ReactNode } from "react"

import '../styles/global.css'
import './layout.css'

type LayoutProps = {
  children: ReactNode,
  path: string
}

const Routes = [
  {
    name: "home",
    icon: IconNames.home,
    route: "/"
  },
  {
    name: "projects",
    icon: IconNames.integrationInstructions,
    route: "/projects/"
  },
  {
    name: "contact",
    icon: IconNames.accountBox,
    route: "/contact/"
  }
]

const Layout: FunctionComponent<LayoutProps> = ({children, path}) => {
  const [showSplash, setShowSplash] = useState(true)
  const [splashFinished, setSplashFinished] = useState(false)

  const onLayoutAnimationFinished = () => !splashFinished && setSplashFinished(true)

  const hide = () => setShowSplash(false)
  useTimeout(hide, 1000)

  const { width } = useWindowSize()
  const desktopScreen = width > 600

  return (
    <AnimateSharedLayout type={showSplash ? 'crossfade' : undefined}>
      {showSplash ? (
        <Splash/>
      ) : (
        <AnimatePresence>
          <motion.div
            className="parent"
            style={{gridTemplateColumns: desktopScreen ? "100px 1fr" : "1fr"}}
          >
            {desktopScreen && (
              <div className="navContainer">
                <Bar routes={Routes} path={path} desktopScreen={desktopScreen}/>
              </div>
            )}

            <motion.div
              initial={{backgroundPositionX: "calc(200% + 0px)", backgroundPositionY: "calc(200% + 0px)"}}
              animate={{
                backgroundPositionX: "calc(100% + 150px)",
                backgroundPositionY: "calc(100% + 200px)"
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 60,
                damping: 12
              }}
              className="contentContainer"
            >

              <motion.div
                layoutId={!splashFinished ? "header" : undefined}
                className="logoHeading"
                onLayoutAnimationComplete={onLayoutAnimationFinished}
              >
                <motion.div className="smallBarParent" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>
                  {!desktopScreen && (
                    <Bar routes={Routes} path={path} desktopScreen={desktopScreen}/>
                  )}
                </motion.div>
                <motion.img layoutId={!splashFinished ? 'logo' : undefined} src="/liam.svg" alt="site-logo" />
              </motion.div>

              <div className="contentParent">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </AnimateSharedLayout>
  )
}

export default Layout

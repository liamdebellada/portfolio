import type {FunctionComponent} from 'react'
import React, {useCallback, useMemo, useState} from 'react'

import {navigate} from 'gatsby'
import {motion, useAnimation} from 'framer-motion'

import Icon, {IconNames} from '~/components/Icon'

import './nav.css'

type BarProps = {
  routes: Array<{
    icon: IconNames,
    name: string,
    route: string
  }>,
  path: string,
  desktopScreen: boolean
}

const Bar: FunctionComponent<BarProps> = ({routes, path, desktopScreen}) => {
  const [expanded, setExpanded] = useState({current: false, animFinish: true})

  const animation = useAnimation()

  const handleExpand = useCallback(() => {
    if (!expanded.current) {
      animation.start({
        height: "12rem",
        position: "absolute",
        transition: {duration: 0.2}
      })
    } else {
      animation.start({
        height: "3rem",
        position: "absolute",
        transition: {duration: 0.2}
      })
    }

    setExpanded({
      current: !expanded.current,
      animFinish: false
    })
  }, [expanded, animation])

  const navigationItems = useMemo(() => routes.map(({ route, icon }, i) => (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      key={i}
      className="navItem noselect"
      onClick={() => navigate(route)}
    >
      <Icon
        name={icon}
        className={route === path ? "navItemActive": ''}
      />
    </motion.div>
  )), [path, routes])

  if (!desktopScreen) return (
    <motion.div
      onAnimationComplete={() => setExpanded({current: expanded.current, animFinish: true})}
      animate={animation}
      className={`barParent smallSize ${expanded && 'expandedNav'}`}
      onClick={handleExpand}
    >
      {expanded.current && expanded.animFinish ? navigationItems : <Icon name={IconNames.menu} />}
    </motion.div>
  )

  return (
    <motion.div className="barParent fullSize">{navigationItems}</motion.div>
  )
}

export default Bar

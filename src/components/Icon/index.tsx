import React from 'react'

import { ReactComponent as Home } from 'icons/home.svg'
import { ReactComponent as AccountBox } from 'icons/account_box.svg'
import { ReactComponent as Menu } from 'icons/menu.svg'
import { ReactComponent as IntegrationInstructions } from 'icons/integration_instructions.svg'

import type { FunctionComponent } from 'react'

export enum IconNames {
    home = 'home',
    accountBox = 'accountBox',
    menu = 'menu',
    integrationInstructions = 'integrationInstructions'
}

const Icons = {
  [IconNames.home]: Home,
  [IconNames.accountBox]: AccountBox,
  [IconNames.menu]: Menu,
  [IconNames.integrationInstructions]: IntegrationInstructions
}

type IconProps = {
    name: IconNames,
    className?: string
}

const Icon: FunctionComponent<IconProps> = ({ name, className }) => {
  const IconComponent = Icons[name]
  return <IconComponent className={className} />
}

export default Icon

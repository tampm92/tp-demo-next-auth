import React from 'react'

import LoaderIcon from '@/assets/svg/loader.svg'
import GoogleIcon from '@/assets/svg/google.svg'
import FacebookIcon from '@/assets/svg/facebook.svg'
import GithubIcon from '@/assets/svg/github.svg'

const Icons = {
  google: GoogleIcon,
  facebook: FacebookIcon,
  github: GithubIcon
}

const SvgIcon = (props) => {
  const Icon = Icons[props.svgName]
  
  // component does exist
  if (typeof Icon !== 'undefined') {
    return <Icon className={props.className} />
  }
  // component doesn't exist yet
  return (
    <LoaderIcon className={props.className} />
  )
}

export default SvgIcon
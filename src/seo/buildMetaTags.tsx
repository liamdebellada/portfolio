import React from 'react'

const buildMetaTags = ({ ...metaOptions }: Record<string, string>) => () =>
  Object.entries(metaOptions)
    .map(([name, content], i) => (
      <meta key={i} name={name} content={content} />
    ))
    .concat(<meta name="image" content="/favicon.ico" />)

export default buildMetaTags

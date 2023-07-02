import React from 'react'
import ContentLoader from 'react-content-loader'
import './loader.scss'

const FadingLoader = () => {
  return (
    <div>
      <FadingLoaderCard1 />
      
     
    </div>
  )
}

const FadingLoaderCard1 = () => {
  return (
    <ContentLoader
      width={480}
      height={47}
      backgroundColor="#f2f2f3"
      foregroundColor="#fafafa"
    >
      <rect x="87" y="3" rx="5" ry="5" width="350" height="15" />
      <rect x="16" y="0" rx="0" ry="0" width="55" height="60" />
    </ContentLoader>
  )
}



FadingLoader.metadata = {
  name: 'Nikhil Anand', // My name
  github: 'anandnkhl', // Github username
  description: 'Loader that fades downwards', // Little tagline
  filename: 'FadingLoader', // filename of your loader
}

export default FadingLoader
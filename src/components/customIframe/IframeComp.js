import React from 'react'
import CustomIframe from './CustomIframe'
import MyComponent from './MyComponent'

const IframeComp = () => {
  return (
    <CustomIframe title='A custom made iframe'>
        <MyComponent />
      </CustomIframe>
  )
}

export default IframeComp

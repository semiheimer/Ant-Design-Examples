import React from 'react'

function MyComponent() {
    return (
        <div>
  
        <div dangerouslySetInnerHTML={{ __html: customIframeContent }}></div>
        </div>
    )
}

export default MyComponent;

const customIframeContent = `<p>iframe Test Pages</p>`
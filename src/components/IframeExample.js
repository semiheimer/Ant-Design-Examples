import { Button, Popover, Space } from 'antd'
import React from 'react'

const IframeExample = () => {

    const content = (
        <iframe
          src="https://hurriyet.com.tr"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
    );
    
  return (
      <Space direction="vertical">
          <iframe width={500} height={500}
          src="https://hurriyet.com.tr"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
          </Popover>
          <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" width={1000} height={500} title='A youtube video on React hooks'></iframe>
    </Space>
  )
}

export default IframeExample

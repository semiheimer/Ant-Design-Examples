import { Button, Modal, Popover, Space } from 'antd'
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
      {/* <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
          </Popover> */}
      <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" width={ 1000 } height={ 500 } title='A youtube video on React hooks'></iframe>
      <Modal open={ true } centered={true} okText="" closable={false} cancelText={null}  footer={null}>
        <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" width={ 470 } height={ 500 } title='A youtube video on React hooks'></iframe>
      </Modal>
      <Popover>
        <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" width={ 400 } height={ 500 } title='A youtube video on React hooks'></iframe>
      </Popover>
    </Space>
  )
}

export default IframeExample

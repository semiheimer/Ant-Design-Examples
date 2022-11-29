import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Image, Modal, Space } from "antd";
import React, { useState } from "react";
import classes from "./ImageExample.module.css";

const Url = "https://www.w3schools.com/howto/img_avatar.png";
const ImageExample = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (url) => {
        setPreviewImage(url);
  
      setPreviewTitle("resim");
    };

   //document.getElementsByClassName("ant-image-mask-info")[0].innerText = "resim";


  return (
    <>
      <div className={classes.container}>
              <Image
                  width={300}
          src={Url}
          alt="Avatar"
          className={classes.image}
                  style={{ width: "100%" }}
              
        />
        <div className={classes.middle}>
          {/* <div className={classes.text}>John Doe</div> */}
          <Space>
            <Button type="primary" icon={<EyeOutlined />} onClick={()=> setPreviewOpen(true)} />
            <Button type="primary" icon={<DeleteOutlined />} />
          </Space>
        </div>
          </div>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img
       
          alt="example"
          style={{
            width: '100%',
          }}
          src={Url}
        />
      </Modal>
    </>
  );
};

export default ImageExample;

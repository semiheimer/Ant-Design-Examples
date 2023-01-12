import { Button, Form } from "antd";
import React from "react";
import CustomInput from "./CustomInputMask";
//rest
const ImaskExample = () => {
  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Form onFinish={handleSubmit} layout="vertical" autoComplete="off">
      <Form.Item name="expiry">
        <CustomInput />
      </Form.Item>
      <Button htmlType="submit">Onayla</Button>
    </Form>
  );
};

export default ImaskExample;

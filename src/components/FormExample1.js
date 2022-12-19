import { Button, Form, Input, Modal, Popover } from "antd";
import React, { useState } from "react";
import FormComponent1 from "./FormComponent1";
import FormComponent2 from "./FormComponent2";

const FormExample1 = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(true);
  const handleSubmit = async (values) => {
    console.log(values);
  };
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      autoComplete="off"
    >
      <FormComponent1 />
      <FormComponent2 />
      <Button type="primary" htmlType="submit">
        Kaydet
      </Button>
      </Form>
      
      </>
  );
};

export default FormExample1;

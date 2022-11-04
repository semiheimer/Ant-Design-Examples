import { Button, Form, Input } from "antd";
import React from "react";
import FormComponent1 from "./FormComponent1";
import FormComponent2 from "./FormComponent2";

const FormExample1 = () => {
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      autoComplete="off"
    >
      <FormComponent1/>
      <FormComponent2/>
      <Button type="primary" htmlType="submit">
        Kaydet
      </Button>
    </Form>
  );
};

export default FormExample1;

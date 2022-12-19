import React from "react";
import { Form, Input, InputNumber } from "antd";

const FormComponent2 = () => {
  const formatNumberWithThousandSeparatorAndTwoDecimalPlaces = (value) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "TRY",
    })
      .format(value)
      .replace(/TRY/g, "");
  return (
    <>
      <Form.Item
        label="Soyad"
        name="last_name"
        rules={[
          {
            required: true,
            message: "Lütfen soyadınızı giriniz!",
          },
          {
            whitespace: true,
            message: "Lütfen soyadınızı giriniz!",
          },
          {
            min: 2,
            max: 20,
            message: "Soyadınız en az 2 en fazla 20 karakter olmalıdır!",
          },
          {
            pattern: "^[A-Za-züÜçÇıİşŞğĞöÖ s*]+$",
            message: "Lütfen sadece harf giriniz!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Lütfen Soyadınızı yazınız" />
      </Form.Item>
      <Form.Item
        label="number"
        name="number"
        rules={[
          {
            required: true,
            message: "Lütfen numara giriniz!",
          },
        ]}
        hasFeedback
      >
        <InputNumber
          style={{ width: "100%" }}
          decimalSeparator={","}
          formatter={formatNumberWithThousandSeparatorAndTwoDecimalPlaces}
        />
      </Form.Item>
      <Form.Item
        label="number1"
        name="number1"
        rules={[
          {
            required: true,
            message: "Lütfen numara giriniz!",
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          type="number"
          min={0}
          precision={2}
          controls={false}

        />
      </Form.Item>
    </>
  );
};

export default FormComponent2;

import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import dayjs from 'dayjs';

export const cardNumberFormatter = ( number ) => {
    const rawText = [...number.split(" ").join("")]; 
    const creditCard = [];
    rawText.forEach((t, i) => {
        if (i % 4 === 0) creditCard.push(" "); 
        creditCard.push(t);
    });
    return creditCard.join(""); 
};

const PriceInput = ({ value = "", onChange }) => {

  const triggerChange = (changedValue) => {
    onChange?.(

   changedValue);
	};

	const onNumberChange = ( e ) => {

    const cardInput = e.target.value.replace( /\D/g, "" ).slice( 0, 12 );

    triggerChange(
      cardInput
    );
	};

  return (

      <Input
        type="text"
		 value={ ( cardNumberFormatter(value) ) }
        onChange={onNumberChange}
      />
  );
};

const FormExample2 = () => {

  const onFinish = (values) => {
	console.log('Received values form: ', values);
	};
	
	const checkPrice = ( _, value ) => {

    if (value?.length===12) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Kart numarası 12 hane olmalıdır!'));
  };
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };
	
  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="card_number"
        label="Price"
        rules={[
          {
            required: true,
            message: "Lütfen kart numarası giriniz!"
          },

          {
            min: 12,
            max: 12,
            message:"Kart numarası 12 hane olmalıdır!"
          },
        ]}
      >
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

   <DatePicker picker="month" disabledDate={disabledDate} />
    </Form>
  );
};

export default FormExample2;
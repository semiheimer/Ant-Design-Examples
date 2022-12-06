import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';


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

    // let wsRegex = /^\s+|\s+$/g; 
    // let result = e.target.value.replace(wsRegex, "0");
    // console.log(result)
		const cardInput = e.target.value.replace( /[^0-9\\.]+/g, "" ).slice( 0, 5 );
		console.log( "cardInput",cardInput );

		// const newNumber = parseInt( cardInput || "0" , 10 );

    triggerChange(
      cardInput
    );
	};
  // const den = " j78- * i 79".replace(/[^0-9\\.]+/g, '');
  // console.log(den);
  return (

      <Input
        type="text"
       //value={value.number || number}
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

    if (value?.length===5) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Kart numarası 5 hane olmalıdır!'));
	};
	
  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            validator: checkPrice,
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
    </Form>
  );
};

export default FormExample2;

//const cardInput = e.target.value.replace( /\D/g, "" ).slice( 0, 16 );
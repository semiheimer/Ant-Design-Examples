import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';


export const cardNumberFormatter = ( number ) => {
    if ( !number ) return;
    const rawText = [...number.split(" ").join("")]; 
    const creditCard = [];
    rawText.forEach((t, i) => {
        if (i % 4 === 0) creditCard.push(" "); 
        creditCard.push(t);
    });
    return creditCard.join(""); 
};

const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState("");

  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      ...value,
      ...changedValue,
    });
	};
	cardNumberFormatter( number );
	const onNumberChange = ( e ) => {
		if ( Number.isNaN( number ) ) {
			return;
		}
		const cardInput = e.target.value.replace( /\D/g, "" ).slice( 0, 16 );
		console.log( typeof cardInput );

		// const newNumber = parseInt( cardInput || "0" , 10 );
	      setNumber( cardInput );

    triggerChange({
      number: cardInput|| " ",
    });
	};

  return (

      <Input
        type="text"
       //value={value.number || number}
		 value={ cardNumberFormatter( value.number || number ) }
        onChange={onNumberChange}
      />
  );
};

const FormExample2 = () => {

  const onFinish = (values) => {
	console.log('Received values form: ', values);
	};
	
	const checkPrice = ( _, value ) => {

    if (value?.number.toString().length===16) {
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
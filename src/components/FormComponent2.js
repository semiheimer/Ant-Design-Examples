import React from 'react'
import { Form, Input } from 'antd'

const FormComponent2 = () => {
  return (
	<Form.Item
	label="Soyad"
	name="last_name"
	rules={ [
		{
			required: true,
			message: "Lütfen soyadınızı giriniz!"
		},
		{
			whitespace: true,
			message:"Lütfen soyadınızı giriniz!"
		},
		{
			min: 2,
			max: 20,
			message:"Soyadınız en az 2 en fazla 20 karakter olmalıdır!"
		},
		{
			pattern: "^[A-Za-züÜçÇıİşŞğĞöÖ s*]+$",
			message: "Lütfen sadece harf giriniz!"
		}
	] }
	hasFeedback
>
	<Input placeholder="Lütfen Soyadınızı yazınız" />
</Form.Item>
  )
}

export default FormComponent2
import React from 'react'
import { Form, Input } from 'antd'

const FormComponent1 = () => {
  return (
	<Form.Item
	label="Ad"
	name="first_name"
	rules={ [
		{
			required: true,
			message: "Lütfen adınızı giriniz!"
		},
		{
			whitespace: true,
			message:"Lütfen adınızı giriniz!"
		},
		{
			min: 3,
			max: 20,
			message:"Adınız en az 3 en fazla 20 karakter olmalıdır!"
		},
		{
			pattern: "^[A-Za-za-züÜçÇıİşŞğĞöÖ s*]+$",
			message: "Lütfen sadece harf giriniz!"
		}
	] }
	hasFeedback
>
	<Input placeholder="Lütfen adınızı yazınız" />
</Form.Item>
  )
}

export default FormComponent1
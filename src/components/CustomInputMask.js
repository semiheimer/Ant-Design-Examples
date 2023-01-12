import { Input } from "antd";
import React from "react";
import InputMask from "react-input-mask";

// Will work fine
const CustomInputMask = (props) => (
  <InputMask {...props} mask="9,999,999.99" style={{ color: "black" }}>
    <Input />
  </InputMask>
);

export default CustomInputMask;

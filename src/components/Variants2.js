import { Col, Form, Input, Row, Space, Typography } from "antd";
import { useEffect } from "react";
import React, { useState } from 'react'
import { ConsoleSqlOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Variants2 = () => {
	const variants = { renk: [ "sarı", "kırmızı" ], ebat: [ "300", "500" ], sekil: [ "kare", "dikdörtgen" ] };
    const [abc,setAbc] =useState(undefined);
	const myFunc2 = () => {
		let keysArr = []
		Object.keys(variants).map((item, index) => keysArr.push(variants[item]))
		// console.log('keysArr', keysArr)
	  const result = cartesian(keysArr)
	  //console.log('result', result)
		const abc=result.map( ( item,i ) => { 
			const den= item.map( ( object,i ) => {
				console.log(object,i)
				return (<Form.Item key={i+1}><Text>{ object }</Text></Form.Item>)
			} )	
			return <Space key={i+1}>{ den}</Space>

		} );
		setAbc( abc );
	}
	console.log(abc)
	const cartesian = (args)  => {
	  var r = [], max = args.length-1;
	  function helper(arr, i) {
		  for (let j=0, l=args[i].length; j<l; j++) {
			  let a = arr.slice(0); // clone arr
			  a.push(args[i][j]);
			  if (i==max)
				  r.push(a);
			  else
				  helper( a, i + 1 );
		
		  }
	
	  }
	  helper([], 0);
	  return r;
  }

	

	useEffect( () => {
		myFunc2()
	}, [] );

  return (
	  <>
		  <h3>Varyants</h3>
		  {abc}
	  </>
    
  )
}

export default Variants2
import { Col, Form, Input, Row, Space, Typography } from "antd";
import { useEffect } from "react";
import React, { useState } from 'react'

const { Text } = Typography;

const Variants = () => {
	const variants = { renk: [ "sarı", "kırmızı" ], ebat: [ "300", "500" ], sekil: [ "kare", "dikdörtgen" ] };
    const [abc,setAbc] =useState(undefined);

	const columns = () => {    
        const abc1 = variants.renk.map( ( renk ) => {         
            return variants.ebat.map( ( ebat ) => {
                return variants.sekil.map( ( sekil ) => {
                    // console.log( renk, ebat, sekil );
                    return (<Row><Space
                        key={ renk+ebat+sekil }
                        style={ {
                            display: "flex",
                            marginBottom: 8
                        } }
                        align="baseline"
                    >
                       <Text>{ renk}</Text>
                        <Text>{ ebat}</Text>
                        <Text>{ sekil}</Text>
                  <Col> <Form.Item label="Ücret" name={renk+ebat+sekil+"price"}><Input></Input></Form.Item></Col>
                        <Form.Item label="Stok" name={ renk + ebat + sekil + "miktar" }><Input></Input></Form.Item>
                        <Form.Item label="KDV" name={renk+ebat+sekil+"miktar"}><Input></Input></Form.Item>
                    </Space> </Row>)
                } )
            } )
        } ); 
        setAbc( abc1 );
    }

// console.log(abc)
    useEffect( () => { columns(); },[]);
  return (
      <><h3>Varyants</h3>
          { abc }</>
  )
}

export default Variants
import { Button, Form, Input, Table, Modal } from 'antd';
import React, { useEffect, useState } from 'react'

function EditableTable2 () {
	const [ dataSource, setDataSource ] = useState( [] );
	const [ editingRow, setEditingRow ] = useState( undefined );
	const [form] = Form.useForm();
	
	const columns = [
		{
		  title: 'Renk',
			dataIndex: 'color',
		},
		{
		  title: 'Ebat',
			dataIndex: 'size',
			// render: ( text, record,i ) => {
			// 	const keyName = Object.keys( record ).find( key => record[ key ] === text );
			// 		return ( <Form.Item name={`${keyName}+${i}`}
			// 			rules={ [ { required: true, message: "Lütfen isim gir dostum" } ] }><Input />
			// 		</Form.Item> )
			// 	}
		},
		{
		  title: 'Şekil',
			dataIndex: 'shape',
			// render: ( _, record ) => {
			// 	return ( <Form.Item name={record.key}
			// 		rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
			// 	</Form.Item> )
			// 	}
	
		},
		{
			title: 'Fiyat',
			  render: ( _, record,i ) => {
				  return ( <Form.Item name={`price+${i}`}
					  rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
				  </Form.Item> )
				  }	  
		},
		{
			title: 'Stok',
			  render: ( _, record ,i) => {
				  return ( <Form.Item name={`stock+${i}`}
					  rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
				  </Form.Item> )
				  }	  
		  },

		{
			title: 'Actions',
			render: (_,record) => {
				return (
					<>
						<Button typeof='link' onClick={ () =>deleteHandler(record)}>Delete</Button>
					</>
				)
			}
		}
	]
	const handleSubmit =  ( values ) => { 
console.log(values)
	}
	const deleteHandler = (record) => {
        Modal.confirm({
            title: "Emin misin dostum?",
			okText: "Evet",
			cancelText:"Hayır",
            okType: "danger",
            onOk: () => setDataSource((prev) => prev.filter((item) => item.key !== record.key))
        });
    };
	
	useEffect( () => {
		let data=[];
		for ( let i = 0; i < 5; i++ ) { 
			data.push({ key: i, color: `Kırmızı-${i}`, size: `300-${i}`, shape: `Kare-${i}` });
		}
		setDataSource( data );

	 }, [] );

	return (
		<Form form={form}
			onFinish={ handleSubmit }>
			<Table
		bordered
		dataSource={dataSource}
		columns={columns}
			/>
			<Button htmlType='submit'>Kaydet</Button>
		</Form>
	
  )
}

export default EditableTable2

// let datacolumns = reportDataRows && Object.keys(reportDataRows[0])?.map((key) => (
//     <span >{columns.push({
//         title: key, dataIndex: key,
//         //defaultSortOrder: 'descend',
//         sorter: true
//     })}
//     </span>))

// < Table 
//   rowClassName = {(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'} 
//   size = { 'default'} 
//   columns = { columns } 
//   bordered = { true} 
//   sortDirections = { ['ascend', 'descend'] } 
//   loading = { reportDataRows === undefined ? true : false} 
//   pagination = {{ pageSize: 10 }} dataSource = { reportDataRows === undefined ? [] : reportDataRows} 
// />
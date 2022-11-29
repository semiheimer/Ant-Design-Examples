import { Button, Form, Input, Table, Modal, Space, Col } from 'antd';
import React, { useEffect, useState } from 'react'

function EditableTable2 () {
	const [ dataSource, setDataSource ] = useState( [] );
	const [selectedRows, setSelectedRows] = useState([]);
	const [form] = Form.useForm();
	
	const columns = [
		{
		  title: 'Renk',
			dataIndex: 'color',
			width: '9%',
		},
		{
		  title: 'Ebat',
			dataIndex: 'size',
			width: '9%',
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
			width: '9%',
			// render: ( _, record ) => {
			// 	return ( <Form.Item name={record.key}
			// 		rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
			// 	</Form.Item> )
			// 	}
	
		},
		{
			title: 'Barkod',
			width: '9%',
			  render: ( _, barcode,i ) => {
				  return ( <Form.Item name={`barcode+${i}`}
					  rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
				  </Form.Item> )
				  }	  
		},
		{
			title: 'Perakende Satış Fiyatı',
			width: '9%',
			  render: ( _, record,i ) => {
				  return ( <Form.Item name={`sales_price+${i}`}
					  rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
				  </Form.Item> )
				  }	  
		},
		{
			title: 'Stok',
			width: '9%',
			  render: ( _, record ,i) => {
				  return ( <Form.Item name={`stock+${i}`}
					  rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
				  </Form.Item> )
				  }	  
		},
		{
			title: 'KDV',
			width: '11.7%',
			  render: ( _, record ,i) => {
				  return ( <Form.Item name={`Value_added_tax+${i}`}
					  rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
				  </Form.Item> )
				  }	  
		},
		{
			title: 'Stok Kodu',
			width: '9%',
			  render: ( _, record ,i) => {
				  return ( <Form.Item name={`stock_code+${i}`}
					  rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
				  </Form.Item>)
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
		setDataSource(data);
		

	}, [] );
console.log(dataSource)
	return (
		
		<Form form={form}
			onFinish={ handleSubmit }>		
			<Table
		bordered
		dataSource={dataSource}
				columns={ columns }
				rowSelection={{
					type: "checkbox",
					selectedRowKeys: selectedRows,
					onChange: (keys) => setSelectedRows(keys),
				}}
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
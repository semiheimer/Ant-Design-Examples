import { Button, Form, Input, Table, Modal, Space, Col,Typography } from "antd";
import React, { useEffect, useState } from "react";

const { Text } = Typography;

function EditableTable2() {
  const [dataSource, setDataSource] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [form] = Form.useForm();
  const [abc,setAbc] =useState(undefined);
  const variants = {
    renk: ["sarı", "kırmızı"],
    ebat: ["300", "500"],
    sekil: ["kare", "dikdörtgen"],
  };
  const columns = [
    // {
    //   title: 'Renk',
    // 	dataIndex: 'color',
    // 	width: '9%',
    // },
    // {
    //   title: 'Ebat',
    // 	dataIndex: 'size',
    // 	width: '9%',
    // 	// render: ( text, record,i ) => {
    // 	// 	const keyName = Object.keys( record ).find( key => record[ key ] === text );
    // 	// 		return ( <Form.Item name={`${keyName}+${i}`}
    // 	// 			rules={ [ { required: true, message: "Lütfen isim gir dostum" } ] }><Input />
    // 	// 		</Form.Item> )
    // 	// 	}
    // },
    // {
    //   title: 'Şekil',
    // 	dataIndex: 'shape',
    // 	width: '9%',
    // 	// render: ( _, record ) => {
    // 	// 	return ( <Form.Item name={record.key}
    // 	// 		rules={ [ { required: true, message:"Lütfen adres gir dostum" } ] }><Input />
    // 	// 	</Form.Item> )
    // 	// 	}

    // },
    {
      title: "Barkod",
      width: "9%",
      render: (_, barcode, i) => {
        return (
          <Form.Item
            name={`barcode+${i}`}
            rules={[{ required: true, message: "Lütfen adres gir dostum" }]}
          >
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Perakende Satış Fiyatı",
      width: "9%",
      render: (_, record, i) => {
        return (
          <Form.Item
            name={`sales_price+${i}`}
            rules={[{ required: true, message: "Lütfen adres gir dostum" }]}
          >
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Stok",
      width: "9%",
      render: (_, record, i) => {
        return (
          <Form.Item
            name={`stock+${i}`}
            rules={[{ required: true, message: "Lütfen adres gir dostum" }]}
          >
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "KDV",
      width: "11.7%",
      render: (_, record, i) => {
        return (
          <Form.Item
            name={`Value_added_tax+${i}`}
            rules={[{ required: true, message: "Lütfen adres gir dostum" }]}
          >
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Stok Kodu",
      width: "9%",
      render: (_, record, i) => {
        return (
          <Form.Item
            name={`stock_code+${i}`}
            rules={[{ required: true, message: "Lütfen adres gir dostum" }]}
          >
            <Input />
          </Form.Item>
        );
      },
    },

    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button typeof="link" onClick={() => deleteHandler(record)}>
              Delete
            </Button>
          </>
        );
      },
    },
	];
	
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

  const handleSubmit = (values) => {
    console.log(values);
  };

  const deleteHandler = (record) => {
    Modal.confirm({
      title: "Emin misin dostum?",
      okText: "Evet",
      cancelText: "Hayır",
      okType: "danger",
      onOk: () =>
        setDataSource((prev) => prev.filter((item) => item.key !== record.key)),
    });
  };

  useEffect(() => {
    const keyName = Object.keys(variants);
    columns.unshift(
      ...keyName.map((key, i) => ({ title: key, dataIndex: variants.key }))
    );

    let data = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        key: i,
        color: `Kırmızı-${i}`,
        size: `300-${i}`,
        shape: `Kare-${i}`,
      });
    }
    setDataSource(data);
  }, []);

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: selectedRows,
          onChange: (keys) => setSelectedRows(keys),
        }}
      />
      <Button htmlType="submit">Kaydet</Button>
    </Form>
  );
}

export default EditableTable2;

const cartesian = (args) => {
  var r = [],
    max = args.length - 1;
  function helper(arr, i) {
    for (let j = 0, l = args[i].length; j < l; j++) {
      let a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i == max) r.push(a);
      else helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
};

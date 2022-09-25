import { Rate, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const columns = [
	{
	  title: 'P.Id',
	  dataIndex: 'id',
	  key: 'id',
	  render: (text) => <a>{text}</a>,
	},
	{
	  title: 'Title',
	  dataIndex: 'title',
		key: 'title',
	},
	{
	  title: 'Price (USD)',
	  dataIndex: 'price',
        key: 'price',
        sorter: (record1, record2) => record1.price-record2.price
    },
    {
        title: 'Discount (USD)',
        dataIndex: 'discountPercentage',
        key: 'discount',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
        key: 'stock',
        
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        render: (rating)=><Rate allowHalf  disabled value={rating} />
        
    }, 
	// {
	//   title: 'Tags',
	//   key: 'tags',
	//   dataIndex: 'tags',
	//   render: (_, { tags }) => (
	// 	<>
	// 	  {tags.map((tag) => {
	// 		let color = tag.length > 5 ? 'geekblue' : 'green';
  
	// 		if (tag === 'loser') {
	// 		  color = 'volcano';
	// 		}
  
	// 		return (
	// 		  <Tag color={color} key={tag}>
	// 			{tag.toUpperCase()}
	// 		  </Tag>
	// 		);
	// 	  })}
	// 	</>
	//   ),
	// },
	// {
	//   title: 'Action',
	//   key: 'action',
	//   render: (_, record) => (
	// 	<Space size="middle">
	// 	  <a>Invite {record.name}</a>
	// 	  <a>Delete</a>
	// 	</Space>
	//   ),
	// },
	// {
	// 	title: 'Invited',
	// 	key: 'key',
	// 	render: (record) => {
	// 		const color = record.age > 32 ? "green" : "red";
	// 		const status=record.age > 32 ? "Invited" : "Not invited";
	// 		return <Tag color={color}>{ status}</Tag>
			
			
	// 	}
	//   },
];
  

const TableExample2 = () => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 10,
        },
    });
    
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const fetchData = async () => {
        setLoading(true);
        const response = await axios("https://dummyjson.com/products");
        if (!response.status === 200) {
            setLoading(false);
            throw Error("Malesef basarisiz");
        }
       setData(response.data.products); 
        setLoading(false);
    }
    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
          pagination,
          filters,
          ...sorter,
        });
      };
    
    useEffect(() => {
        fetchData();
    }, [])
    
    return (

        <Table
            loading={loading}
            dataSource={data}
            columns={columns}
            pagination={{
                current: page,
                pageSize: pageSize,
                onChange: (page, pageSize) => {
                    setPage(page);
                    setPageSize(pageSize);
                }
            }}
            //onChange={handleTableChange}
            rowKey={(record) => record.id}
            bordered
        ></Table>
  )
}

export default TableExample2
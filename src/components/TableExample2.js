import { Button, Input, Rate, Table } from "antd";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const TableExample2 = () => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    // const [tableParams, setTableParams] = useState({
    //     pagination: {
    //         current: 1,
    //         pageSize: 10
    //     }
    // });

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const fetchData = async () => {
        setLoading(true);
        const response = await axios("https://dummyjson.com/products");
        if (!response.status === 200) {
            setLoading(false);
            throw Error("Malesef basarisiz");
        }
        setData(response.data.products);
        setLoading(false);
    };
    // const handleTableChange = (pagination, filters, sorter) => {
    //     setTableParams({
    //         pagination,
    //         filters,
    //         ...sorter
    //     });
    // };

    //**********************************************//
    const columns = [
        {
            title: "P.Id",
            dataIndex: "id",
            key: "id",
            render: (text) => <Button type="link">{text}</Button>
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title"
        },
        {
            title: "Price (USD)",
            dataIndex: "price",
            key: "price",
            sorter: (record1, record2) => record1.price - record2.price
        },
        {
            title: "Discount (USD)",
            dataIndex: "discountPercentage",
            key: "discount"
        },
        {
            title: "Stock",
            dataIndex: "stock",
            key: "stock"
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand"
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            render: (rating) => <Rate allowHalf disabled value={rating} />
        }
    ];
    //**********************************************//
    useEffect(() => {
        fetchData();
    }, []);

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
            bordered></Table>
    );
};

export default TableExample2;

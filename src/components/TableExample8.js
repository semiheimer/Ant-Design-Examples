import { Button, Drawer, Input, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const dataSource = [
    {
        key: "1",
        id: 1,
        name: "Ahmet Brown",
        email: "ahmet@gmail.com",
        address: "New York No. 22 Lake Park"
    },
    {
        key: "2",
        id: 2,
        name: "Nuri Green",
        email: "nuri@gmail.com",
        address: "London No. 66 Lakerda Park"
    },
    {
        key: "3",
        id: 3,
        name: "Serhat Black",
        email: "serhat@gmail.com",
        address: "Sidney No. 55 MLake Park"
    },
    {
        key: "4",
        id: 4,
        name: "Denger Arrini",
        email: "denger@gmail.com",
        address: "Sidney No. 4 ZLake Park"
    },
    {
        key: "5",
        id: 5,
        name: "Hayati Haelok",
        email: "hayati@gmail.com",
        address: "Sidney No. 7 GLake Park"
    },
    {
        key: "6",
        id: 6,
        name: "Zekeriya Haelok",
        email: "zekeriya@gmail.com",
        address: "Sidney No. 11 Lake Park"
    }
];

const TableExample8 = () => {
    const [data, setData] = useState(dataSource);
    const [open, setOpen] = useState(false);
    const [willEditStudent, setWillEditStudent] = useState(undefined);
    const columns = [
        {
            title: "Student ID",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "E-mail",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "Actions",
            key: "actions",
            render: (record) => (
                <>
                    <EditOutlined onClick={() => editHandler(record)} />
                    <DeleteOutlined
                        style={{ color: "red", marginLeft: 10 }}
                        onClick={() => deleteHandler(record)}
                    />
                </>
            )
        }
    ];
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const deleteHandler = (record) => {
        Modal.confirm({
            title: "Are you sure?",
            okText: "YES",
            okType: "danger",
            onOk: () => setData((prev) => prev.filter((item) => item.id !== record.id))
        });
    };
    const editHandler = (record) => {
        showDrawer();
        setWillEditStudent({ ...record });
    };
    const onChangeHandler = (inputType) => (e) => {
        setWillEditStudent((pre) => ({ ...pre, [inputType]: e.target.value }));
    };

    const drawerSubmitHandler = () => {
        setData((pre) =>
            pre.map((item) =>
                item.id === willEditStudent.id ? { ...item, ...willEditStudent } : item
            )
        );
        onClose();
    };

    return (
        <>
            <Button type="primary">Add New Student</Button>
            <Table columns={columns} dataSource={data} />
            <Drawer
                title="Edit"
                placement="right"
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={drawerSubmitHandler} type="primary">
                            Submit
                        </Button>
                    </Space>
                }>
                <Input value={willEditStudent?.name} onChange={onChangeHandler("name")} />
                <Input value={willEditStudent?.email} onChange={onChangeHandler("email")} />
                <Input value={willEditStudent?.address} onChange={onChangeHandler("address")} />
            </Drawer>
        </>
    );
};

export default TableExample8;

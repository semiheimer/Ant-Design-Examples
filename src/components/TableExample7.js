import { Button, Table, Tag } from "antd";
import React, { useState } from "react";

const data = [
    {
        key: "1",
        id: 1,
        name: "AhmetBrown",
        age: 32,
        address: "New York No. 22 Lake Park",
        grade: "A+"
    },
    {
        key: "2",
        id: 2,
        name: "Nuri Green",
        age: 42,
        address: "London No. 66 Lakerda Park",
        grade: "A"
    },
    {
        key: "3",
        id: 3,
        name: "Serhat Black",
        age: 22,
        address: "Sidney No. 55 MLake Park",
        grade: "B"
    },
    {
        key: "4",
        id: 4,
        name: "Denger Arrini",
        age: 35,
        address: "Sidney No. 4 ZLake Park",
        grade: "C"
    },
    {
        key: "5",
        id: 5,
        name: "Hayati Haelok",
        age: 38,
        address: "Sidney No. 7 GLake Park",
        grade: "C+"
    },
    {
        key: "6",
        id: 6,
        name: "Zekeriya Haelok",
        age: 38,
        address: "Sidney No. 11 Lake Park",
        grade: "B+"
    }
];
const columns = [
    {
        title: "Student ID",
        dataIndex: "id",
        key: "id",
        render: (text) => <Tag>{text}</Tag>
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <Button type="link">{text}</Button>
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address"
    },
    //filtering
    {
        title: "Grade",
        dataIndex: "grade",
        key: "grade",
        sorter: (a, b) => a.grade.localeCompare(b.grade),
        render: (value) => {
            const color = value.includes("A") ? "green" : value.includes("B") ? "blue" : "red";
            return <Tag color={color}>{value}</Tag>;
        },
        filters: [
            {
                text: "A",
                value: "A"
            },
            {
                text: "B",
                value: "B"
            },
            {
                text: "C",
                value: "C"
            }
        ],
        onFilter: (value, record) => record.grade.includes(value)
    }
];
const TableExample7 = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    return (
        <Table
            bordered
            dataSource={data}
            columns={columns}
            rowSelection={{
                type: "checkbox",
                selectedRowKeys: selectedRows,
                onChange: (keys) => setSelectedRows(keys),
                getCheckboxProps: (record) => ({
                    disabled: record.grade === "C"
                    // Column configuration not to be checked
                }),
                //Hepsini seçi gizler
                //hideSelectAll: true,
                selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_NONE,
                    Table.SELECTION_INVERT,
                    {
                        key: "even",
                        text: "Select even rows",
                        onSelect: (allkeys) => {
                            const wilSelectKeys = allkeys.filter((key) => key % 2 === 0);
                            setSelectedRows(wilSelectKeys);
                        }
                    },
                    {
                        key: "odd",
                        text: "Select odd rows",
                        onSelect: (allkeys, value) => {
                            const wilSelectKeys = allkeys.filter((key) => key % 2 !== 0);
                            setSelectedRows(wilSelectKeys);
                        }
                    }
                ]
            }}>
            TableExample7
        </Table>
    );
};

export default TableExample7;

import {
  AppstoreOutlined,
  DiffOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";

// const itemsHome = [
//   { label: <Link to="/">Home</Link>, key: "home", icon: <AppstoreOutlined /> },
// ];

const items = [
  {
    label: <Link to="/sample10">Form1</Link>,
    key: "sample10",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample11">Cascade1</Link>,
    key: "sample11",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample12">Variants</Link>,
    key: "sample12",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample15">Variants2</Link>,
    key: "sample15",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample18">Form2</Link>,
    key: "sample18",
    icon: <DiffOutlined />,
  },
];
const itemsTables = [
  {
    label: <Link to="/sample1">Table1</Link>,
    key: "table1",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/sample2">Table2</Link>,
    key: "table2",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/sample3">Table3</Link>,
    key: "table3",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample4">Table4</Link>,
    key: "table4",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample5">Table5</Link>,
    key: "table5",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample6">Table6</Link>,
    key: "table6",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample7">Table7</Link>,
    key: "table7",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample8">Table8</Link>,
    key: "table8",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample9">Table9</Link>,
    key: "table9",
    icon: <DiffOutlined />,
  },

];
const editableTable=[  {
    label: <Link to="/sample13">Editable Table</Link>,
    key: "table13",
    icon: <DiffOutlined />,
  },
  {
    label: <Link to="/sample14">Editable Table2</Link>,
    key: "table14",
    icon: <DiffOutlined />,
    },
    {
        label: <Link to="/sample16">Editable Table3</Link>,
        key: "table16",
        icon: <DiffOutlined />,
  },]
    
  const imageExample=[  {
    label: <Link to="/sample17">Image Hover Example</Link>,
    key: "image1",
    icon: <DiffOutlined />,
  },
]
      
const Navbar = () => {
  const menu = (
    <Menu
      items={itemsTables}
      style={{ display: "flex", flexDirection: "row" }}
    />
  );
  const menuOther = (
    <Menu
      items={items}
      style={{ display: "flex", flexDirection: "row" }}
    />
    );
    const menueditableTable = (
        <Menu
          items={editableTable}
          style={{ display: "flex", flexDirection: "row" }}
        />
  );
  const menuImageExamples = (
    <Menu
      items={imageExample}
      style={{ display: "flex", flexDirection: "row" }}
    />
  );
  return (
    <Space>
      <Link to="/">Home</Link>
      <Dropdown overlay={menu}>
        <NavLink onClick={(e) => e.preventDefault()}>
          <Space>
            Tables
            <DownOutlined />
          </Space>
        </NavLink>
          </Dropdown>
          <Dropdown overlay={menueditableTable}>
        <NavLink onClick={(e) => e.preventDefault()}>
          <Space>
          Editable Tables
            <DownOutlined />
          </Space>
        </NavLink>
      </Dropdown>
      <Dropdown overlay={menuOther}>
        <NavLink onClick={(e) => e.preventDefault()}>
          <Space>
            Forms
            <DownOutlined />
          </Space>
        </NavLink>
      </Dropdown>
      <Dropdown overlay={menuOther}>
        <NavLink onClick={(e) => e.preventDefault()}>
          <Space>
            Other Examples
            <DownOutlined />
          </Space>
        </NavLink>
      </Dropdown>
      <Dropdown overlay={menuImageExamples}>
        <NavLink onClick={(e) => e.preventDefault()}>
          <Space>
       Images
            <DownOutlined />
          </Space>
        </NavLink>
      </Dropdown>
    </Space>
  );
};
export default Navbar;

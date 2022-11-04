import { AppstoreOutlined, DiffOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const items = [
    { label: <Link to="/">Home</Link>, key: "home", icon: <AppstoreOutlined /> },
    { label: <Link to="/sample1">Table1</Link>, key: "table1", icon: <AppstoreOutlined /> },
    { label: <Link to="/sample2">Table2</Link>, key: "table2", icon: <AppstoreOutlined /> },
    { label: <Link to="/sample3">Table3</Link>, key: "table3", icon: <DiffOutlined /> },
    { label: <Link to="/sample4">Table4</Link>, key: "table4", icon: <DiffOutlined /> },
    { label: <Link to="/sample5">Table5</Link>, key: "table5", icon: <DiffOutlined /> },
    { label: <Link to="/sample6">Table6</Link>, key: "table6", icon: <DiffOutlined /> },
    { label: <Link to="/sample7">Table7</Link>, key: "table7", icon: <DiffOutlined /> },
    { label: <Link to="/sample8">Table8</Link>, key: "table8", icon: <DiffOutlined /> },
    { label: <Link to="/sample9">Table9</Link>, key: "table9", icon: <DiffOutlined /> },
    { label: <Link to="/sample10">Form1</Link>, key: "form1", icon: <DiffOutlined /> }
];
const Navbar = () => {
    return <Menu mode="horizontal" items={items} />;
};

export default Navbar;

import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const items = [
    { label: <Link to="/sample1">Table1</Link>, key: "table1", icon: <AppstoreOutlined /> },
    { label: <Link to="/sample2">Table2</Link>, key: "table2", icon: <AppstoreOutlined /> },
    { label: <Link to="/sample3">Table3</Link>, key: "table3" },
    { label: <Link to="/sample4">Table4</Link>, key: "table4" },
    { label: <Link to="/sample5">Table5</Link>, key: "table5" },
    { label: <Link to="/sample6">Table6</Link>, key: "table6" },
    { label: <Link to="/sample7">Table7</Link>, key: "table7" }
];
const Navbar = () => {
    return <Menu mode="horizontal" items={items} />;
};

export default Navbar;

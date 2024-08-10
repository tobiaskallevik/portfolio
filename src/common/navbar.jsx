import React from "react";
import './common.css';
import { HomeOutlined, UserOutlined, BulbOutlined, PhoneOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home"><HomeOutlined style={{ fontSize: '1.5rem'}}/></a>
      <a href="#about"><UserOutlined style={{ fontSize: '1.5rem'}}/></a>
      <a href="#experience"><BulbOutlined style={{ fontSize: '1.5rem'}}/></a>
      <a href="#contact"><PhoneOutlined style={{ fontSize: '1.5rem'}}/></a>

    </div>
  );
}

export default Navbar;


import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  LaptopOutlined,
  UserOutlined,
  FormOutlined,
  HomeOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import '../theme/css/sidebar.css';

const { Header, Content, Sider } = Layout;

const menuItems = [
  {
    key: "/",
    icon: React.createElement(HomeOutlined),
    label: "หน้าหลัก",
  },
  {
    key: "/exam-management",
    icon: React.createElement(FormOutlined),
    label: "จัดการเวลาสอบ",
  },
  {
    key: "/room-management",
    icon: React.createElement(LaptopOutlined),
    label: "สร้างห้องสอบ",
    // children: [
    //   {
    //     key: "/room-management/add-room",
    //     label: "เพิ่มห้องสอบ",
    //   },
    //   {
    //     key: "/room-management/edit-room",
    //     label: "แก้ไขห้องสอบ",
    //   }
    // ]
  },
  {
    key: "/member-spacial-project",
    icon: React.createElement(UserOutlined),
    label: "รายชื่อนักศึกษา",
    children: [
      {
        key: "/member-spacial-project/sp-1",
        label: "Special Project 1", 
      },
      {
        key: "/member-spacial-project/sp-2",
        label: "Special Project 2",
      }
    ]
  },
  {
    key: "/sumary-room",
    icon: React.createElement(LaptopOutlined),
    label: "สรุปห้องสอบ",
  },
  // {
  //   key: "/add-member-spacial-project",
  //   icon: React.createElement(UserOutlined),
  //   label: "เพิ่มรายชื่อนักศึกษา",
  // },
  {
    key: "/add-lecture",
    icon: React.createElement(UserAddOutlined),
    label: "เพิ่มอาจารย์ที่ปรึกษา",
  },
  {
    key: "/create-project-for-student",
    icon: React.createElement(UserOutlined),
    label: "สร้างโปรเจกต์ให้นักศึกษา",
  },
];

const SiderBar = ({ page, pageName, pageSub, path }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const [selectedKey, setSelectedKey] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedKey(path);
  }, [path]);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    navigate(e.key);
  };

  return (
    <Layout>
      <Header className="header" >
        <img
          src="https://hrd.kmutnb.ac.th/wp-content/uploads/2024/01/logo-kmutnb-final.png"
          alt="logo"
          className="logo"
        />
        <span style={{ fontSize: '20px'}}>
          Special Project Examination Management System for CSB Program
        </span>
        <span>
          
          {"สวัสดี เจ้าหน้าที่ สุดหล่อ สุดสวย"}<UserOutlined />
          </span>
      </Header>

      <Layout>
        <Sider className="sider" >
          <p style={{ marginLeft: '10px'}}><UserOutlined /> เจ้าหน้าที่</p>
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            defaultOpenKeys={["sub1"]}
            items={menuItems}
            onClick={handleMenuClick}
            theme="light"  // เปลี่ยนจาก dark เป็น light
            className="custom-menu"  // เพิ่ม className เพื่อควบคุมการออกแบบ
          />
        </Sider>

        <Layout style={{ background: '#fdf2e900', padding: "0 24px 24px" }}>
          <Breadcrumb
            className="breadcrumb"
            items={[{ title: pageName }, { title: pageSub ?? "" }]}
          />

          <Content
            className="content"
            style={{
              
              borderRadius: borderRadiusLG,
            }}
          >
            {page}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SiderBar;

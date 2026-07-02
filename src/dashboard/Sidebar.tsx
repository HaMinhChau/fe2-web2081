import React from "react";
import { Layout, Menu } from "antd";
import { 
  DashboardOutlined, 
  UserOutlined, 
  FormOutlined, 
  SettingOutlined 
} from "@ant-design/icons";

const { Sider } = Layout;

interface SidebarProps {
  userCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ userCount }) => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0" theme="dark" width={250}>
      {/* Brand Logo */}
      <div style={{ 
        height: 64, 
        display: "flex", 
        alignItems: "center", 
        paddingLeft: 24, 
        color: "#fff", 
        fontSize: 18, 
        fontWeight: "bold",
        borderBottom: "1px solid #1f1f1f"
      }}>
        <span style={{ background: "#1677ff", padding: "2px 8px", borderRadius: 4, marginRight: 8 }}>B</span>
        <span>Dashboard</span>
      </div>

      {/* Menu Navigation */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          { key: "1", icon: <DashboardOutlined />, label: "Tổng quan" },
          { key: "2", icon: <FormOutlined />, label: `Đăng ký (02)` },
          { key: "3", icon: <UserOutlined />, label: `Người dùng (${String(userCount).padStart(2, '0')})` },
          { key: "4", icon: <SettingOutlined />, label: "Cài đặt" },
        ]}
      />
    </Sider>
  );
};
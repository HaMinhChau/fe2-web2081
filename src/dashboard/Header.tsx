import React from "react";
import { Layout, Input, Avatar, Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

export const Header: React.FC = () => {
  return (
    <AntdHeader style={{ 
      background: "#fff", 
      padding: "0 24px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      borderBottom: "1px solid #f0f0f0",
      position: "sticky",
      top: 0,
      zIndex: 1
    }}>
      <Space size="middle">
        <Text strong style={{ fontSize: 30 }}>Hê lô Konichiwa</Text>
      </Space>

      <Space size="large">
        <Input.Search placeholder="Tìm kiếm..." style={{ width: 220 }} />
        <Avatar style={{ backgroundColor: "#1677ff" }} icon={<UserOutlined />} />
      </Space>
    </AntdHeader>
  );
};
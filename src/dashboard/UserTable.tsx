import React from "react";
import { Table, Button, Tag, Space, Card, Popconfirm } from "antd";
import { DeleteOutlined, UserAddOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { User } from "../type";

interface UserTableProps {
  users: User[];
  onRemoveUser: (id: string) => void;
  onOpenModal: () => void;
}

export const UserTable: React.FC<UserTableProps> = ({ users, onRemoveUser, onOpenModal }) => {
  
  const columns: ColumnsType<User> = [
    {
      title: "Người dùng",
      dataIndex: "name",
      key: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
      render: (role: User["role"]) => {
        let color = "geekblue";
        if (role === "Admin") color = "volcano";
        if (role === "Editor") color = "gold";
        if (role === "Viewer") color = "green";
        return <Tag color={color}>{role}</Tag>;
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Popconfirm
          title="Xóa người dùng"
          description="Bạn có chắc chắn muốn xóa user này không?"
          onConfirm={() => onRemoveUser((record as User & { id: string }).id)}
          okText="Có"
          cancelText="Hủy"
        >
          <Button type="text" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];

  return (
    <Card 
      title="Danh sách người dùng" 
      styles={{ header: { fontSize: 16 } }}
      extra={
        <Button type="primary" icon={<UserAddOutlined />} onClick={onOpenModal}>
          Thêm user
        </Button>
      }
    >
      <Table 
        columns={columns} 
        dataSource={users} 
        locale={{ emptyText: "Chưa có user nào. Bấm '+ Thêm user' để bắt đầu." }}
      />
    </Card>
  );
};
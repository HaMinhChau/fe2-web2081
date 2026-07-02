import { Table, Tag, Space, Button, message, Tabs } from "antd";

interface User {
  key: number;
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

function Lap2() {

  const studentColumns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Major", dataIndex: "major", key: "major" },
  ];
  const studentData = [
    { key: 1, id: 1, name: "Nam", age: 20, major: "IT" },
    { key: 2, id: 2, name: "Linh", age: 21, major: "Business" },
    { key: 3, id: 3, name: "Hà", age: 19, major: "Design" },
  ];


  const productColumns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Product Name", dataIndex: "productName", key: "productName" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `${price.toLocaleString()} đ`,
    },
    { title: "Category", dataIndex: "category", key: "category" },
  ];
  const productData = [
    { key: 1, id: 1, productName: "Laptop Dell XPS", price: 25000000, category: "Electronics" },
    { key: 2, id: 2, productName: "iPhone 15", price: 22000000, category: "Electronics" },
    { key: 3, id: 3, productName: "Áo thun basic", price: 150000, category: "Fashion" },
    { key: 4, id: 4, productName: "Bàn làm việc gỗ", price: 1800000, category: "Furniture" },
    { key: 5, id: 5, productName: "Ghế công thái học", price: 3200000, category: "Furniture" },
  ];
  const userData: User[] = [
    { key: 1, id: 1, name: "Nam", email: "nam@example.com", status: "active" },
    { key: 2, id: 2, name: "Linh", email: "linh@example.com", status: "inactive" },
    { key: 3, id: 3, name: "Hà", email: "ha@example.com", status: "active" },
  ];

  const handleEdit = (record: User) => {
    message.info(`Edit user: ${record.name}`);
  };

  const handleDelete = (record: User) => {
    message.warning(`Delete user: ${record.name}`);
  };

  const userColumns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: User) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];


  const items = [
    {
      key: "1", label: "Danh sách sinh viên", children: (
        <Table columns={studentColumns} dataSource={studentData} pagination={false} />
      ),
    },
    {
      key: "2", label: "Danh sách sản phẩm", children: (
        <Table
          columns={productColumns}
          dataSource={productData}
          pagination={{ pageSize: 3 }}
        />
      ),
    },
    {
      key: "3", label: "User Management", children: (
        <Table columns={userColumns} dataSource={userData} pagination={false} />
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default Lap2;
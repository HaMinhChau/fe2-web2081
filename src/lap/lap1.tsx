import { useState } from "react";
import { Layout, Button, Form, Input, Table, Modal, Select } from "antd";
import { User } from "../type.tsx"
const { Content, Footer } = Layout;

const initialUsers: User[] = [
  { key: 1, name: "Nguyễn Minh An", email: "an.nguyen@vidu.com", role: "Admin" },
  { key: 2, name: "Trần Bảo Châu", email: "chau.tran@vidu.com", role: "Editor" },
  { key: 3, name: "Lê Hoàng Long", email: "long.le@vidu.com", role: "Viewer" },
];

export default function Lap1() {

  const [users, setUsers] = useState<User[]>(initialUsers);


  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleAddUser = (values: any) => {
    const newUser: User = {
      key: Date.now(),
      name: values.name,
      email: values.email,
      role: values.role,
    };
    setUsers([...users, newUser]);
    form.resetFields();
    setOpen(false);
  };


  const handleRemoveUser = (key: number) => {
    setUsers(users.filter((user) => user.key !== key));
  };


  const [registerForm] = Form.useForm();
  const handleRegister = (values: any) => {
    console.log("Đăng ký:", values);
  };

  const columns = [
    { title: "Tên", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Vai trò", dataIndex: "role" },
    {
      title: "Hành động",
      render: (record: User) => (
        <Button danger onClick={() => handleRemoveUser(record.key)}>
          Xóa
        </Button>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}> 
      <Layout>
        <Content style={{ padding: 20 }}>
          <h2>Form đăng ký</h2>
          <Form
            form={registerForm}
            onFinish={handleRegister}
            layout="vertical"
            style={{ maxWidth: 400, marginBottom: 40 }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Nhập tên" }]}
            >
              <Input placeholder="Tên của bạn" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Nhập email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Nhập mật khẩu" }]}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <h2>Danh sách người dùng</h2>
          <Button
            type="primary"
            onClick={() => setOpen(true)}
            style={{ marginBottom: 16 }}
          >
            Add User
          </Button>

          <Table columns={columns} dataSource={users} />
          <Modal
            title="Thêm user mới"
            open={open}
            onCancel={() => setOpen(false)}
            onOk={() => form.submit()}
          >
            <Form form={form} onFinish={handleAddUser} layout="vertical">
              <Form.Item
                name="name"
                label="Tên"
                rules={[{ required: true, message: "Nhập tên" }]}
              >
                <Input placeholder="Tên người dùng" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Nhập email" },
                  { type: "email", message: "Email không hợp lệ" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item name="role" label="Vai trò" initialValue="Viewer">
                <Select
                  options={[
                    { value: "Admin", label: "Admin" },
                    { value: "Editor", label: "Editor" },
                    { value: "Viewer", label: "Viewer" },
                  ]}
                />
              </Form.Item>
            </Form>
          </Modal>

        </Content>

        <Footer style={{ textAlign: "center" }}>Wellcome to my zone</Footer>
      </Layout>
    </Layout>
  );
}
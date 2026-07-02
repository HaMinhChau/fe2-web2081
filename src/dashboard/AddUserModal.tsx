import React, { useEffect } from "react";
import { Modal, Form, Input, Select } from "antd";
import { User, UserRole } from "../type";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: User) => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [form] = Form.useForm();

  // Reset form dữ liệu mỗi khi mở/đóng modal
  useEffect(() => {
    if (!isOpen) {
      form.resetFields();
    }
  }, [isOpen, form]);

  const handleOk = () => {
    form.validateFields()
      .then((values) => {
        const newUser: User = {
          name: values.name,
          email: values.email,
          role: values.role,
        };
        onAddUser(newUser);
        onClose();
      })
      .catch((info) => {
        console.log("Validate thất bại:", info);
      });
  };

  return (
    <Modal
      title="Thêm user mới"
      open={isOpen}
      onOk={handleOk}
      onCancel={onClose}
      okText="Lưu user"
      cancelText="Hủy"
      destroyOnClose
    >
      <Form form={form} layout="vertical" name="addUserForm" initialValues={{ role: "Viewer" }}>
        <Form.Item
          name="name"
          label="Tên"
          rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
        >
          <Input placeholder="Trần Thị B" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" }
          ]}
        >
          <Input placeholder="tranb@vidu.com" />
        </Form.Item>

        <Form.Item name="role" label="Vai trò">
          <Select>
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="Editor">Editor</Select.Option>
            <Select.Option value="Viewer">Viewer</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
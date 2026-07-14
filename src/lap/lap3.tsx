import { useState } from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";

function Lap3() {
  const [post, setPost] = useState<any>(null);

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
        display: "flex",
        flexDirection: "column",
        gap: "70px",
      }}
    >

      <div>
        <h2>Đăng nhập</h2>

        <Form
          layout="vertical"
          onFinish={(values) => console.log("Login:", values)}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Nhập email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Nhập password" }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </div>

      <div>
        <h2>Đăng ký</h2>

        <Form
          layout="vertical"
          onFinish={(values) => console.log("Register:", values)}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Nhập tên" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Nhập số điện thoại" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Nhập mật khẩu" },
              { min: 6, message: "Tối thiểu 6 ký tự" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Nhập lại mật khẩu" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu không khớp")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form>
      </div>

      <div>
        <h2>Thêm sản phẩm</h2>

        <Form
          layout="vertical"
          onFinish={(values) => console.log("Product:", values)}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giá"
            name="price"
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Số lượng"
            name="quantity"
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Mô tả" name="description">
            <Input.TextArea rows={4} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form>
      </div>

      <div>
        <h2>Thêm bài viết</h2>

        <Form
          layout="vertical"
          onFinish={(values) => {
            console.log(values);
            setPost(values);
          }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Select
              options={[
                { label: "Technology", value: "Technology" },
                { label: "Education", value: "Education" },
                { label: "News", value: "News" },
              ]}
            />
          </Form.Item>

          <Form.Item label="Slug" name="slug">
            <Input />
          </Form.Item>

          <Form.Item label="Content" name="content">
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Image URL" name="image">
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Đăng bài
          </Button>
        </Form>

        {post && (
          <div style={{ marginTop: "20px" }}>
            <h3>Thông tin bài viết</h3>

            <p><b>Title:</b> {post.title}</p>
            <p><b>Category:</b> {post.category}</p>
            <p><b>Slug:</b> {post.slug}</p>
            <p><b>Content:</b> {post.content}</p>

            <img src={post.image} alt="" width={200} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Lap3;
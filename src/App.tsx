import { Layout, Menu } from "antd";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Lap2 from "./lap/lap2.tsx";
import Lap1 from "./lap/lap1.tsx";
import Lap3 from "./lap/lap3.tsx";
import Lap4 from "./lap/lap4.tsx";
import { useState } from "react";

const { Sider, Content } = Layout;

function App() {
  const [selectedKey, setSelectedKey] = useState("1");
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      <Layout style={{ minHeight: "calc(100vh - 64px)" }}>
        <Sider>
          <div style={{ color: "white", padding: 16, fontWeight: "bold" }}>
            Dashboard
          </div>
          <Menu
            onClick={(e) => setSelectedKey(e.key)}
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKey]}
            items={[
              { key: "1", label: "Lap1" },
              { key: "2", label: "Lap2" },
              { key: "3", label: "Lap3" },
              { key: "4", label: "Lap4" },
            ]}
          />
        </Sider>

        <Layout>
          <Content style={{ padding: 24 }}>
            <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Chào mừng đến với WEB2091
              </h1>
              {selectedKey === "1" && <Lap1 />}
              {selectedKey === "2" && <Lap2 />}
              {selectedKey === "3" && <Lap3 />}
              {selectedKey === "4" && <Lap4 />}
            </div>
          </Content>
        </Layout>
      </Layout>

      <Toaster />
    </>
  );
}

export default App;
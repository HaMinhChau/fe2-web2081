import React, { useState } from "react";
import { Layout, Typography, theme } from "antd";
import { Toaster } from "react-hot-toast";

import { User } from "./type";

import { Sidebar } from "./dashboard/Sidebar";
import { Header } from "./dashboard/Header";
import { RegisterForm } from "./dashboard/RegisterForm";
import { UserTable } from "./dashboard/UserTable";
import { AddUserModal } from "./dashboard/AddUserModal";

const { Content } = Layout;
const initialUsers: User[] = [
  ({ id: "1", name: "Nguyễn Minh An", email: "an.nguyen@vidu.com", role: "Admin" } as unknown) as User,
  ({ id: "2", name: "Trần Bảo Châu", email: "chau.tran@vidu.com", role: "Editor" } as unknown) as User,
  ({ id: "3", name: "Lê Hoàng Long", email: "long.le@vidu.com", role: "Viewer" } as unknown) as User,
];

export default function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleAddUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const handleRemoveUser = (id: string) => {
    setUsers(users.filter((user) => (user as any).id !== id));
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar userCount={users.length} />
        
        <Layout>
          <Header />
          <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
            <RegisterForm />
            <UserTable 
              users={users} 
              onRemoveUser={handleRemoveUser} 
              onOpenModal={() => setIsModalOpen(true)} 
            />
          </Content>
        </Layout>
      </Layout>
      <AddUserModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddUser={handleAddUser} 
      />

      <Toaster />
    </>
  );
}
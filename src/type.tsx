export type UserRole = 'Admin' | 'Editor' | 'Viewer';

export interface User {
  key: number;
  name: string;
  email: string;
  role: UserRole;
}

export interface Userlap2 {
  key: number;
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}
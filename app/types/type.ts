export interface TodoItem {
  id: string;
  ListName: string;
}
export interface ProtectedRootLayoutProps {
  children: React.ReactNode;
}
export interface AddCardProps {
  propName: string;
  buttonStyles1?: React.CSSProperties;
  buttonStyles2?: React.CSSProperties;
}
export interface NextAuthSessionProviderProps {
  children: React.ReactNode;
}
export interface taskListProps {
  id: string;
  TaskName: string;
}
export interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

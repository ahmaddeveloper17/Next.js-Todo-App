export interface TodoItem {
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
export interface taskName {
  TaskName: string;
}
export interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}
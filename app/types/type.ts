export interface TodoItem {
  Email: string;
  id: string;
  ListName: string;
}
export interface ProtectedRootLayoutProps {
  children: React.ReactNode;
}
export interface AddCardProps {
  label: string;
  bgColor:string
  textColor:string
  borderColor:string
  onClick: (e:any) => void;
}
export interface NextAuthSessionProviderProps {
  children: React.ReactNode;
}
export interface taskListProps {
  id: string;
  TaskName: string;
  TaskId: string;
}
export interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

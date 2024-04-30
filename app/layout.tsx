// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
// import ToastProvider from "@/providers/ToastProvider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ToastProvider />
//         <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Stint_Ultra_Condensed } from "next/font/google";

import "./globals.css";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import ToastProvider from "@/providers/ToastProvider";

const inter = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}

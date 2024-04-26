import LogoutBtn from "@/components/logoutBtn/LogoutBtn";
import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Name : {session?.user?.name}</h1>
      <div>Protected Dashboard, hello: {session?.user?.email}</div>
      <LogoutBtn />
    </main>
  );
}

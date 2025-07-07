"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
  
  return (
    <>
      <div>AdminPage - Welcome {session?.user?.name}</div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </>
  );
};

export default AdminPage;

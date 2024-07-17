"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const authStatus = useSelector((state: any) => state.auth.status);

  if (!authStatus && pathname.endsWith("/dashboard")) {
    router.push("/");
  } else if (
    authStatus &&
    (pathname.endsWith("/sign-in") || pathname.endsWith("/sign-up"))
  ) {
    router.push("/dashboard");
  }

  return <div>{children}</div>;
};

export default AuthWrapper;

'use client'
import { useRouter } from "next/navigation";
import React from "react";

export default function SignUpLayout({
  
  children,
}: {
    children: React.ReactNode;
  }) {
  const router = useRouter();
  router.refresh()
  return <>{children}</>;
}
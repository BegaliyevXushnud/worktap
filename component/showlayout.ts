"use client";

import { usePathname } from "next/navigation";

export default function ShowLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" ;
  const isRegisterPage = pathname === "/register" ;

  return !(isLoginPage || isRegisterPage) ? children : null;
}

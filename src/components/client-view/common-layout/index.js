"use client";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import dynamic from "next/dynamic";

function CommonLayout({ children }) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      {children}
    </>
  );
}

export default dynamic (() => Promise.resolve(CommonLayout), {ssr: false})

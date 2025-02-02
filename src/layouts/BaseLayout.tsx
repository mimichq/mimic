import React from "react";
import NavigationMenu from "@/components/template/NavigationMenu";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationMenu />
      <main className="h-screen p-2 pb-20">{children}</main>
    </>
  );
}

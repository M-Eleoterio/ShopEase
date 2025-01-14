import "./globals.css";

import React from "react";

export const metadata = {
  title: "ShopEase",
  description: "E-Commerce",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

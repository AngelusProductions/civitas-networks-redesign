'use client';
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.scss";
import "./fonts.scss";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div id='mainWrapper' onClick={() => {
          if (isMenuOpen) setIsMenuOpen(false);
        }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
